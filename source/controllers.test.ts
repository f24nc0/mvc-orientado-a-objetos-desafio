import test from "ava";
import { ContactsController, ContactsControllerOptions} from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  const contactsControl = new ContactsController()
  t.deepEqual(contactsControl.contacts.data[0], {id:1, name:"Ana"})
  t.deepEqual(contactsControl.contacts.data[1], {id:2, name:"Paula"})
  t.deepEqual(contactsControl.contacts.data[2], {id:3, name:"Mer"})
  t.deepEqual(contactsControl.contacts.data[3], {id:4, name:"Dana"})
});

// test("Testeo el método processOptions", (t) => {});
test("testeo el método processOptions", (t)=>{
  const contactsControl = new ContactsController()
  const buscaId = contactsControl.processOptions({action:"get", params:{id:3}})
  t.deepEqual({id:3 , name:"Mer"}, buscaId)

  const buscaTodo = contactsControl.processOptions({action:"get", params:""})
  const contactsTodo = [
    {
      "id": 1,
      "name": "Ana"
    },
    {
      "id": 2,
      "name": "Paula"
    },
    {
      "id": 3,
      "name": "Mer"
    },
    {
      "id": 4,
      "name": "Dana"
    }
  ]
  t.deepEqual(contactsTodo, buscaTodo)
})