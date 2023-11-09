import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data:Contact[] = []

  load(){
    const leeContactos = jsonfile.readFileSync(__dirname +"/contacts.json")
    this.data = leeContactos
  }

  getAll(){
    return this.data
  }

  addOne(contact:Contact){
    this.data.push(contact)
  }

  save(){
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.data)
  }

  getOneById(id:number){
    const encontrado = this.data.find((p)=>p.id == id)
  return encontrado
  }
}
export { ContactsCollection };