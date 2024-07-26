const DeleteModal = ({ open, setOpen, handleDelete, id }) => {
  return (
    <>
      {open && (
        <>
          <div className="h-screen w-full fixed top-0 left-0 bg-black bg-opacity-50  flex justify-center items-center">
            <div className="bg-white h-40 w-72 flex flex-col justify-center items-center rounded gap-4">
              <h1 className="font-semibold text-xl">Are you sure?</h1>
              <div className="flex gap-4">
                <button
                  className="h-10 w-16 bg-red-500 text-white rounded"
                  onClick={() => {
                    handleDelete(id);
                    setOpen(false);
                  }}
                >
                  Yes
                </button>
                <button
                  className="h-10 w-16 bg-green-500 text-white rounded"
                  onClick={() => setOpen(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DeleteModal;
