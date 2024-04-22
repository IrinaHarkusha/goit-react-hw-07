import s from "./ContactList.module.css"
import Contact from "../Contact/Contact"
import { useDispatch, useSelector } from "react-redux"
import { selectFilter } from "../../redux/filtersSlice"
import {  selectIsError, selectIsLoading } from "../../redux/contactsSlice"
import { fetchContactsThunk } from "../../redux/contactsOps"
import { selectFilteredContacts } from "../../redux/selectors"
import { useEffect } from "react"


function ContactList() {
  const searchStr = useSelector(selectFilter)
  const isLoading = useSelector(selectIsLoading)
  const filtered = useSelector(selectFilteredContacts)
  const isError = useSelector(selectIsError)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContactsThunk())
  }, [dispatch])

  if (isLoading) {
    return <h2>Loading...</h2>
  } else if (!filtered.length && searchStr) {
    return <h2 className={s.text}>No such contact exists...</h2>
  } else if (!filtered.length) {
    return <h2 className={s.text}>No available contacts...</h2>
  }

  return (
    <>
      {!isError ? <ul className={s.list}>
        {filtered.map(contact => (
          <Contact contact={contact} key={contact.id} />
      ))}
      </ul> : <h2>Oops...something`s wrong</h2>
      }
    
    </>
  )
}

export default ContactList