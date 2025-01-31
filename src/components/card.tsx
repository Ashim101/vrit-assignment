import { AnimatePresence, motion } from "framer-motion";
import { cardDataType } from "../pages/mainPage";

type props = {
  card: cardDataType;
  selectedItem: number;
  selectHandler: (id: number) => void;
};

const Card = ({ card, selectedItem, selectHandler }: props) => {
  const handleAnimation = () => {
    selectHandler(card?.id);
  };

  return (
    <AnimatePresence mode="wait">
      <button
        onClick={handleAnimation}
        className={`rounded-4xl p-0 focus:outline-none focus-visible::outline-none outline-none hover:outline-none relative h-[461px] min-w-[280px] bg-transparent overflow-hidden card 
          transition-all duration-500`} // Added transition for rotating
      >
        <motion.div
          className="card-circle flex z-10 items-center justify-center absolute top-[-71px] left-[-122px] h-[600px] w-[600px] rounded-full bg-[#f9ebec] cursor-pointer"
          animate={
            selectedItem === card.id
              ? { scale: 0, x: -500, y: 1000, rotate: 180 }
              : {}
          }
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            damping: 300,
            stiffness: 10,
            type: "keyframes",
          }}
          exit={{ scale: 3, x: 0, y: 0, rotate: 0 }}
        >
          <div className="flex  justify-end gap-6 rotate-[270deg] mr-[100px] px-4 ">
            <motion.div
              initial={{}}
              animate={
                selectedItem === card.id
                  ? {
                      rotate: 180,
                    }
                  : {}
              }
              transition={{
                duration: 0.5,
                stiffness: 1,
                damping: 10,
                ease: "easeInOut",
                type: "tween",
              }}
              exit={{ rotate: 0 }}
              className="flex items-center justify-center flex-col gap-3 text-[#c33241] w-[50%] px-[20px]"
            >
              <p className="font-bold text-[32px]">{card.title}</p>
              <p>{card.desc}</p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={
            (selectedItem === card.id) === true ? { width: 600 } : { width: 0 }
          }
          transition={{ type: "tween", duration: 0.5 }}
          exit={{ width: 0 }}
          className="flex relative flex-col rounded-4xl bg-[#c33241] h-full w-full justify-around gap-4 "
        >
          <div className="flex  text-white w-[90%] font-semibold text-lg items-center gap-2 justify-end overflow-x-visible">
            <p className="mr-4">View all Courses</p>
            <div className="mr-5">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.34171 0.508381C7.79732 0.0527689 8.53601 0.0527688 8.99162 0.508381L13.6583 5.17505C14.1139 5.63066 14.1139 6.36935 13.6583 6.82496L8.99162 11.4916C8.53601 11.9472 7.79732 11.9472 7.34171 11.4916C6.8861 11.036 6.8861 10.2973 7.34171 9.84171L10.0168 7.16667L1.16667 7.16667C0.522335 7.16667 -2.81646e-08 6.64434 0 6.00001C2.81647e-08 5.35567 0.522335 4.83334 1.16667 4.83334H10.0168L7.34171 2.1583C6.8861 1.70269 6.8861 0.963992 7.34171 0.508381Z"
                  fill="#F9EBEC"
                />
              </svg>
            </div>
          </div>

          <motion.div
            animate={
              selectedItem === card.id
                ? { x: 0, opacity: 1 }
                : { x: -600, opacity: 0 }
            }
            transition={{
              type: "spring",
              duration: 0.5,
              stiffness: 150,
              damping: 15,
            }}
            exit={{ x: -600, opacity: 0, width: 0 }}
            className="icons flex justify-around gap-1 items-center w-[90%]"
          >
            <img src="/image-1.png" alt="" />
            <img src="/image2.png" alt="" />
            <img src="/image3.png" alt="" />
            <img src="/image4.png" alt="" />
          </motion.div>
          <div className=" flex text-white justify-around">
            <div></div>
            <motion.div
              style={{ transformOrigin: "0% 0%" }}
              animate={
                selectedItem === card.id
                  ? { rotate: 0, opacity: 1 }
                  : { rotate: -90, opacity: 0 }
              }
              transition={{
                type: "tween",
                duration: 0.5,
                stiffness: 150,
                damping: 15,
              }}
              className="flex flex-col gap-3 w-[35%] text-start ml[-10px] "
            >
              <p className="w-full text-[32px] font-bold">{card.title}</p>
              <p>{card.desc}</p>
            </motion.div>
          </div>
        </motion.div>

        <p
          className={`text-[150px] ${
            selectedItem === card.id ? "text-white" : "text-[#c33241]"
          } font-bold z-50 absolute bottom-[0] left-[10%]`}
        >
          {card.number}
          {/* Plus Sign */}
          <span className="absolute  text-[64px] font-bold top-[12px]  right-[-30px] ">
            +
          </span>
        </p>
      </button>
    </AnimatePresence>
  );
};

export default Card;
