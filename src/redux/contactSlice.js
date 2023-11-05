import { createSlice } from "@reduxjs/toolkit";

const contactsSlise = createSlice ({
    name: "contacts",
    initialState: {
        contacts: [],
        filter: '',
        },
 reducers: {
    addContacts: (state, action) => {
        state.contacts.push(action.payload);
    },
    deleteContacts: (state, action) => {
        state.contacts = state.contacts.filter(
            contact => contact.id !== action.payload
        );
    },
    // setFilter: (state, action) => {
    //     state.filter = action.payload;
    // },
    },
})

export const contactsReducer = contactsSlise.reducer;
export const { addContacts, deleteContacts } = contactsSlise.actions;

// initialState = {
//     contacts: [],
//     filter: '',

// }

// export const addContacts = createAction('addContact');
// export const deleteContacts = createAction('delContact');
// export const setFilter = createAction('onChangeFilter');

// export const contactsReducer = createReducer(initialState, builder => builder
//     .addCase(addContacts, (state, action) => {
//             state.contacts.push(action.payload);
//         },)
//     .addCase(deleteContacts, (state, action) => {
//             state.contacts = state.contacts.filter(
//                 contact => contact.id !== action.payload
//             );
//         },)
//     .addCase(setFilter, (state, action) => {
//             state.filter = action.payload;
//         }, ) 
//         )       

// export const contactsReducer = createReducer(initialState, {
// [addContacts]: (state, action) => {
//     state.contacts.push(action.payload);
// },
// [deleteOntacts]: (state, action) => {
//     state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//     );
// },
// setFilter: (state, action) => {
//     state.filter = action.payload;
// },
// })

