import { motion, easeInOut } from "framer-motion";
import Form from "../../components/Form/Form";
import "./create.css";

export default function Create() {
  return (
    <motion.section
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: easeInOut }}
      className="create"
    >
      <Form />
    </motion.section>
  );
}
