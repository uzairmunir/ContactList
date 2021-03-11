export const addNewContact = 'Add-New-Contact';
export const deleteContact = 'Delete-Contact';
export const editContact = 'Edit-Contact';
export const updateContact = 'Update-Contact';
export const addNewContactAction = (contact) => {
  return {
    type: addNewContact,
    payload: contact,
  };
};
export const deleteContactAction = (id) => {
  return {
    type: deleteContact,
    payload: id,
  };
};
export const editContactAction = (id) => {
  return {
    type: editContact,
    payload: id,
  };
};
export const updateContactAction = (contact) => {
  return {
    type: updateContact,
    payload: contact,
  };
};
