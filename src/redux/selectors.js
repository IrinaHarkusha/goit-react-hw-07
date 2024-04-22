import { createSelector } from '@reduxjs/toolkit'
import { selectContacts } from './contactsSlice'
import { selectFilter } from './filtersSlice'


export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, searchStr) => { 
		return contacts.filter(
			item =>
				item.name.toLowerCase().includes(searchStr.toLowerCase())
		)
	})