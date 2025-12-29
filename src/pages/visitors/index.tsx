import { Plus } from "lucide-react";
import { useState } from "react";
import RectangleBackground from "@/components/background/rectangle-background";
import { Button } from "@/components/ui/button";
import { Route } from "@/routes/visitors";
import Canvas from "./components/canvas";
import VisitorCard from "./components/visitor-card";

const VisitorsPage = () => {
  const notes = Route.useLoaderData();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full h-[99.8vh] py-10 px-5">
      <div className="max-w-[550px] h-max mx-auto relative border rounded-xl border-[#dadada] bg-white overflow-hidden">
        <div className="navbar relative w-full bg-white p-4 z-30 h-max border-b border-[#dadada] flex justify-between">
          <p>{notes?.length ?? 0} Notes</p>
          <Button
            variant="secondary"
            onClick={() => setShowModal(true)}
            className="cursor-pointer bg-black shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-shadow duration-500 ease-in-out"
          >
            <Plus className="text-white" onClick={() => setShowModal(true)} />
            <span className="text-white ml-3 text-lg">Leave a note</span>
          </Button>
        </div>
        <div className="w-full h-[80vh] relative z-20 bg-transparent">
          <RectangleBackground />
          {notes?.length ? (
            notes?.map((note, i: number) => {
              const top = `${Math.floor(Math.random() * 70 + 5)}%`;
              const left = `${Math.floor(Math.random() * 70 + 5)}%`;
              const rotate = `${Math.floor(Math.random() * 40 - 20)}deg`;

              return (
                <VisitorCard
                  index={i}
                  key={note.id}
                  top={top}
                  left={left}
                  rotate={rotate}
                  data={note}
                />
              );
            })
          ) : (
            <div className="h-full w-full flex text-xl justify-center items-center">
              <span className="animate-bounce">Loading...</span>
            </div>
          )}
        </div>
      </div>
      <Canvas open={showModal} setOpen={setShowModal} />
    </div>
  );
};

export default VisitorsPage;
