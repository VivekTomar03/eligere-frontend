import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <motion.div
        style={{
          width: "50px",
          height: "50px",
          border: "5px solid #4FD1C5",
          borderRadius: "50%",
          borderTop: "5px solid transparent",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, loop: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default Loader;
