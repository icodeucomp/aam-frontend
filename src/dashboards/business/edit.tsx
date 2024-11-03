"use client";

import * as React from "react";

import { useGet, usePost, useToggleState, useUpload } from "@/hooks";

import { Button, Img } from "@/components";
import { Modal } from "@/dashboards/modal";
import { AnimatePresence } from "framer-motion";

import { BusinessesTypes, ResponseBusinessTypes } from "@/types";
import { UploadTypes } from "@/dashboards/types";

export const Edit = ({ slug }: { slug: string }) => {
  // use modal state and toggle function to open and close modal
  const [ref, modal, toggleModal] = useToggleState();

  // initialize state description, header and errors to initial values
  const [description, setDescription] = React.useState<string>("");
  const [header, setHeader] = React.useState<UploadTypes>();
  const [error, setError] = React.useState<boolean>(false);

  // use post hook to send POST request to server to edit image, business, and then use get hook to get business
  const { loading: loadData, execute } = usePost("PATCH", "/business");
  const { uploading, uploadFile, response: dataImageHeader } = useUpload<UploadTypes>();
  const { response: business } = useGet<ResponseBusinessTypes>({ path: `/business/${slug}` });

  // handle back button if the data is not same as initial data
  const handleClose = () => {
    if (description !== business?.data.description || header?.url !== business?.data.header.url) {
      if (confirm("Are you sure you want to close? Your data will not be saved!")) {
        setDescription(business?.data.description || "");
        setHeader({ url: business?.data.header.url || "", name: business?.data.header.slug || "", size: "" });
        toggleModal();
        return;
      } else {
        return;
      }
    }
    toggleModal();
  };

  // handle image change to add to server database and update initial header to url object to showing header image
  const handleFileImageHeader = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    await uploadFile(file!, `type=business&category=${slug}`);
    setHeader({ url: URL.createObjectURL(file!), name: file?.name || "" });
  };

  // handle form submit to edit business from server database
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updateFields: Partial<BusinessesTypes> = {};

    if (description !== business?.data.description) {
      updateFields.description = description;
    }

    if (header?.name !== business?.data.header?.slug) {
      updateFields.header = { ...updateFields.header, slug: dataImageHeader?.name as string, url: dataImageHeader?.url as string };
    }

    if (Object.keys(updateFields).length < 0) {
      setError(true);
      return;
    }

    execute(`/business/${slug}`, updateFields);
  };

  // to set data business by slug after first render
  React.useEffect(() => {
    if (business?.data !== null) {
      setDescription(business?.data.description || "");
      setHeader({ url: business?.data.header.url || "", name: business?.data.header.slug || "" });
    }
  }, [business]);

  return (
    <div ref={ref}>
      <Button onClick={toggleModal} className="btn-secondary">
        Edit
      </Button>

      <AnimatePresence>
        {modal && (
          <Modal isVisible={modal} onClose={handleClose} className="max-w-xl">
            {loadData ? (
              <div className="flex justify-center py-4">
                <div className="loader"></div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:min-w-xl">
                <h3 className="text-lg font-semibold text-center sm:text-start text-primary">Edit Business</h3>
                <div className="space-y-4">
                  <div className="relative text-center">
                    {error && !header ? <small className="text-red-500">Please enter an image</small> : <small className="w-full">maximum image size 5mb. (aspect ratio of 1:1)</small>}
                    <Img src={header?.url || "/temp-business.webp"} alt={header?.name || ""} className="mx-auto rounded-lg w-72 aspect-square" cover />
                    <label htmlFor="image-header" className="duration-300 cursor-pointer text-primary hover:text-primary/80">
                      Upload Image Header
                    </label>
                    <input type="file" accept="image/*" id="image-header" className="sr-only" onChange={handleFileImageHeader} />
                  </div>
                  {error && !header?.url && <small className="text-red-500">Please enter a image header!</small>}
                  <div className="relative w-full">
                    <input type="text" id="description" value={description} className="floating-input peer" placeholder=" " onChange={(e) => setDescription(e.target.value)} />
                    <label
                      htmlFor="description"
                      className="floating-label peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                    >
                      description
                    </label>
                  </div>
                  {error && !description && <small className="text-red-500">Please enter description!</small>}
                </div>
                <div className="flex justify-end">
                  {uploading ? (
                    <div className="flex justify-end py-4">
                      <div className="loader"></div>
                    </div>
                  ) : (
                    <Button type="submit" className="btn-secondary">
                      Save
                    </Button>
                  )}
                </div>
              </form>
            )}
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};
