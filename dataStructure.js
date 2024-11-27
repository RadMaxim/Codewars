import { names } from "./listOfName.js";
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    // Добавить элемент в конец
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.size++;
    }
  
    // Добавить элемент в начало
    prepend(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      this.size++;
    }
  
    // Удалить элемент по значению
    remove(value) {
      if (!this.head) return null;
  
      let current = this.head;
      while (current) {
        if (current.value === value) {
          if (current === this.head) {
            this.head = this.head.next;
            if (this.head) this.head.prev = null;
          } else if (current === this.tail) {
            this.tail = this.tail.prev;
            if (this.tail) this.tail.next = null;
          } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
          }
          this.size--;
          return current.value;
        }
        current = current.next;
      }
      return null;
    }
  
    // Печать всех элементов
    printList() {
      let allElem = document.getElementById("right_section")
      let res = ``
      let current = this.head;
      console.log(current);
      
      while (current) {
        console.log(current.value);
        
        res+=`<div class="elem"><p>${current.value.name}</p>
        <p>${current.value.currentTime}</p>
        </div>`
        // result.push(current.value);
        current = current.next;
      }
      console.log(res);
      
      allElem.innerHTML = res;
      let allElement =Array.from(document.getElementsByClassName("elem"))
      allElement.forEach((elem)=>{
        elem.addEventListener("click", (e)=>{
          e.target.parentNode.remove();
          
        })
      })
      
        
      }
    
    
    getAt(index) {
        if (index < 0 || index >= this.size) return null;
      
        let current = this.head;
        let count = 0;
      
        while (current) {
          if (count === index) return current.value;
          current = current.next;
          count++;
        }
        return null;
      }
      // Удалить элемент в конце списка
removeLast() {
    if (this.size<10) {
        return null
    }
    if (!this.tail) {
      console.log("Список пуст, нечего удалять.");
      return null;
    }
  
    const removedValue = this.tail.value;
  
    if (this.head === this.tail) { // Если в списке только один элемент
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev; // Перемещаем tail на предыдущий узел
      this.tail.next = null;      // Убираем ссылку на удаленный узел
    }
  
    this.size--;
    return removedValue; // Возвращаем удаленное значение
  }
  
      
  }
const list = new DoublyLinkedList()
window.addEventListener('load',()=>{
    let add = document.getElementById("add")
    let nameId = document.getElementById("nameId")
    add.addEventListener("click",(e)=>{
        e.preventDefault()
        list.prepend({
            name:nameId?.value,
            currentTime: new Date().toTimeString()
        })
        
        console.log(list);
        list.printList()
        console.log(list.removeLast());
         
        
    })

})
  
  
  