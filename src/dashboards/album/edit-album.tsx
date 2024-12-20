"use client";

import * as React from "react";

import { useGet, usePost, useToggleState, useUpload } from "@/hooks";

import { AnimatePresence } from "framer-motion";

import { Button, Img } from "@/components";
import { Modal } from "../modal";

import { FaMinus } from "react-icons/fa6";

import { UploadTypes } from "../types";
import { AlbumTypes, ResponseAlbumTypes } from "@/types";

interface UploadsTypes {
  uploadedFiles: UploadTypes[];
}

export const EditAlbum = ({ slug }: { slug: string }) => {
  // use modal state and toggle function to open and close modal
  const [ref, modal, toggleModal] = useToggleState();

  // initialize value name, slug, header to empty string and medias to empty array
  const initValue = { name: "", slug: "", header: "", medias: [] };

  // initialize state album and errors to initial values
  const [album, setAlbum] = React.useState<Partial<AlbumTypes>>(initValue);
  const [errors, setErrors] = React.useState<boolean>(false);

  // use post hook to send POST request to server to edit images, album, media, and then use get hook to get album
  const { response: resAlbum } = useGet<ResponseAlbumTypes>({ path: `/albums/${slug}` });
  const { uploadFile: uploadImages, response: dataImages, uploading: loadImages } = useUpload<UploadsTypes>();
  const { execute: editAlbum, loading } = usePost("PATCH", "album");
  const { execute: addMedia } = usePost("POST");
  const { execute: deleteMedia } = usePost("DELETE");

  // handle back button if the data is not same as initial data
  const handleClose = () => {
    if (album.name !== resAlbum?.data.name || album.medias !== resAlbum?.data.medias) {
      if (confirm("Are you sure you want to close? Your data has not saved in database!")) {
        setAlbum(initValue);
        toggleModal();
        return;
      } else {
        return;
      }
    }
    toggleModal();
  };

  // handle images change to add media to server database and update initial medias to url object for showing images
  const handleImagesChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    await uploadImages(files!, "type=media");

    const newMedia = files.map((file) => ({
      url: URL.createObjectURL(file),
      slug: file.name,
      name: file.name,
    }));

    setAlbum((prevImages) => ({ ...prevImages, medias: [...(prevImages.medias || []), ...newMedia] }));
  };

  // handle image change to delete media to server database and delete initial medias one by one
  const handleDeleteImage = (slugMedia: string) => {
    deleteMedia(`/albums/${slug}/media/${slugMedia}`, {});
    setAlbum((prevImages) => ({ ...prevImages, medias: prevImages.medias?.filter((media) => media.slug !== slugMedia) }));
  };

  // handle form submit to edit album and media from server database
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updateFields: Partial<AlbumTypes> = {};

    const images = dataImages?.uploadedFiles.map((file) => ({ name: file.name, url: file.url, size: file.size }));

    if (album.name !== resAlbum?.data.name) {
      updateFields.name = album.name;
    }

    if (Object.keys(updateFields).length < 0) {
      setErrors(true);
      return;
    }

    if (album.medias && resAlbum?.data.medias) {
      if (album.medias?.length > resAlbum?.data.medias.length) {
        await addMedia(`/albums/${slug}/media`, images);
      }
    }

    editAlbum(`/albums/${slug}`, updateFields);
  };

  // to set data album by slug after first render
  React.useEffect(() => {
    if (resAlbum) {
      setAlbum({
        name: resAlbum.data.name,
        header: resAlbum.data.header,
        medias: resAlbum.data.medias,
      });
    }
  }, [resAlbum]);

  return (
    <div ref={ref}>
      <Button onClick={toggleModal} className="btn-secondary">
        Edit
      </Button>

      <AnimatePresence>
        {modal && (
          <Modal isVisible={modal} onClose={handleClose} className="max-w-xl">
            {loading ? (
              <div className="flex justify-center w-full py-16">
                <div className="loader"></div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:min-w-xl">
                <h3 className="text-lg font-semibold text-center sm:text-start text-primary">Edit Album</h3>
                <div className="relative text-center">
                  <Img src={album.header || "/temp-business.webp"} alt={"test"} className="mx-auto rounded-lg w-60 aspect-video" cover />
                </div>
                <div className="relative w-full">
                  <input type="text" id="title" className="floating-input peer" placeholder=" " value={album.name} onChange={(e) => setAlbum((prev) => ({ ...prev, name: e.target.value }))} />
                  <label
                    htmlFor="title"
                    className="floating-label peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                  >
                    Title
                  </label>
                </div>
                {errors && !album.name && <small className="w-full text-red-500">Enter name please!</small>}
                <div className="relative flex flex-row items-center overflow-hidden border rounded-lg border-gray/50">
                  <input type="file" id="images" onChange={handleImagesChange} hidden accept="image/*" multiple />
                  <label htmlFor="images" className="file-label">
                    Choose file
                  </label>
                  <label className="text-sm text-slate-500 whitespace-nowrap">{album?.medias?.length} Images</label>
                  <small className="pr-2 ms-auto text-gray/70">Max 5mb. (aspect ratio of 16:9)</small>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {album.medias?.map((image, index) => (
                    <div key={index} className="relative">
                      <button onClick={() => handleDeleteImage(image.slug)} type="button" className="absolute flex items-center justify-center w-5 h-5 rounded-full -top-2 -right-2 z-1 bg-red-500">
                        <FaMinus className="fill-light" />
                      </button>
                      <Img src={image.url || "/temp-business.webp"} alt={`Selected image ${index + 1}`} className="w-full h-32 rounded-lg" cover />
                    </div>
                  ))}
                </div>
                {errors && !album.medias && <small className="w-full text-red-500">Enter media images please!</small>}
                <div className="flex justify-end p-2">
                  {loading || loadImages ? (
                    <div className="loader"></div>
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
