"use client";

import * as React from "react";

import { usePost, useToggleState } from "@/hooks";

import { AnimatePresence } from "framer-motion";

import { Button } from "@/components";
import { Modal } from "../modal";

import { AlbumTypes } from "@/types";

export const AddAlbum = () => {
  // use modal state and toggle function to open and close modal
  const [ref, modal, toggleModal] = useToggleState();

  // initialize value name to empty string
  const initValue = { name: "" };

  // initialize state album and errors to initial values
  const [album, setAlbum] = React.useState<Partial<AlbumTypes>>(initValue);
  const [errors, setErrors] = React.useState<boolean>(false);

  // use post hook to send POST request to server to add album title
  const { execute, loading } = usePost("POST", "album");

  // handle close button if the data is not empty
  const handleClose = () => {
    if (album.name !== "") {
      if (confirm("Are you sure you want to close? Your name has not saved in database!")) {
        setAlbum(initValue);
        toggleModal();
        return;
      } else {
        return;
      }
    }
    toggleModal();
  };

  // handle form submission to add album from server database
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (album.name === "") {
      setErrors(true);
      return;
    }
    const body = { name: album.name };
    execute("/albums", body);
  };

  return (
    <div ref={ref}>
      <Button onClick={toggleModal} className="btn-secondary">
        Add Album
      </Button>

      <AnimatePresence>
        {modal && (
          <Modal isVisible={modal} onClose={handleClose} className="max-w-xl">
            <form onSubmit={handleSubmit} className="space-y-4 md:min-w-xl">
              <h3 className="text-lg font-semibold text-center sm:text-start text-primary">Add Album</h3>
              <div className="relative w-full">
                <input type="text" id="name" className="floating-input peer" placeholder=" " value={album.name} onChange={(e) => setAlbum((prev) => ({ ...prev, name: e.target.value }))} />
                <label
                  htmlFor="name"
                  className="floating-label peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                >
                  Name
                </label>
              </div>
              {errors && !album.name && <small className="w-full text-red-500">Enter name please!</small>}
              <div className="flex justify-end p-2">
                {loading ? (
                  <div className="loader"></div>
                ) : (
                  <Button type="submit" className="btn-secondary">
                    Save
                  </Button>
                )}
              </div>
            </form>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};
