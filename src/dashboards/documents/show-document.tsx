"use client";

import { useGet, useToggleState } from "@/hooks";

import { AnimatePresence } from "framer-motion";

import { Modal } from "../modal";
import { Button } from "@/components";

import { BiShowAlt } from "react-icons/bi";

import { ResponseDocumentTypes } from "@/types";

export const ShowDocument = ({ slug }: { slug: string }) => {
  // use modal state and toggle function to open and close modal
  const [ref, modal, toggleModal] = useToggleState();

  // fetch api to show data document by slug
  const { response: document, loading } = useGet<ResponseDocumentTypes>({ path: `/documents/${slug}` });

  return (
    <div ref={ref}>
      <button onClick={toggleModal} className="p-2 duration-300 border rounded-full border-secondary bg-light hover:bg-secondary group">
        <BiShowAlt size={20} className="text-secondary group-hover:text-light" />
      </button>

      <AnimatePresence>
        {modal && (
          <Modal isVisible={modal} onClose={toggleModal} className="max-w-xl mt-8 space-y-4">
            {loading ? (
              <div className="flex justify-center py-16">
                <div className="loader"></div>
              </div>
            ) : (
              <>
                <div className="flex font-medium text-dark-blue">
                  <p className="flex-shrink-0 w-36 md:w-40 whitespace-nowrap">Document type</p>
                  <p>: {document?.data.category}</p>
                </div>
                <div className="flex font-medium text-dark-blue">
                  <p className="flex-shrink-0 w-36 md:w-40 whitespace-nowrap">Document name</p>
                  <p>: {document?.data.name}</p>
                </div>
                <div className="flex font-medium text-center text-dark-blue">
                  <a href={document?.data.url} target="_blank" rel="noopener" className="block">
                    <Button className="btn-secondary">Show full document</Button>
                  </a>
                </div>
              </>
            )}
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};
