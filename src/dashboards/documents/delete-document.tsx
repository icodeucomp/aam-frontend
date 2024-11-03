"use client";

import { FormEvent } from "react";

import { usePost, useToggleState } from "@/hooks";

import { AnimatePresence } from "framer-motion";

import { Button } from "@/components";
import { Modal } from "../modal";

import { GoTrash } from "react-icons/go";

export const DeleteDocument = ({ slug }: { slug: string }) => {
  // use modal state and toggle function to open and close modal
  const [ref, modal, toggleModal] = useToggleState();

  // use post hook to send DELETE request to server to delete document
  const { execute, loading } = usePost("DELETE", "document");

  // handle form submission to delete document from server database
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    execute(`/documents/${slug}`, {});
  };

  return (
    <div ref={ref}>
      <button onClick={toggleModal} className="p-2 duration-300 border rounded-full border-red-500 bg-light hover:bg-red-500 group">
        <GoTrash size={20} className="text-red-500 group-hover:text-light" />
      </button>

      <AnimatePresence>
        {modal && (
          <Modal isVisible={modal} onClose={toggleModal} className="max-w-sm">
            {loading ? (
              <div className="flex justify-center py-16">
                <div className="loader"></div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full space-y-4">
                <div className="space-y-2">
                  <h1 className="mb-4 text-sm font-semibold text-center sm:text-start text-primary-1 sm:text-lg">Delete Document</h1>
                  <p className="text-sm text-medium text-dark-1 sm:text-base">Are you sure you want to permanently delete this document?</p>
                </div>
                <Button type="submit" className="btn-primary">
                  Delete
                </Button>
              </form>
            )}
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};
