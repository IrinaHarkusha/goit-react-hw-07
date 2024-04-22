import s from "./Contact.module.css"
import { MdAccountCircle } from "react-icons/md"
import { FaPhone } from "react-icons/fa6"
import { useDispatch } from "react-redux"
import { deleteContactThunk } from "../../redux/contactsOps"


function Contact({ contact }) {
  const { id, name, number } = contact
  
  const dispatch = useDispatch()
  return (
      <li className={s.item}>
        <h3> <MdAccountCircle/> {name}</h3>
        <p> <FaPhone/> {number}</p>
        <button onClick={() => dispatch(deleteContactThunk({id}))} className={s.btn}>Delete</button>
      </li>
  )
}

export default Contact