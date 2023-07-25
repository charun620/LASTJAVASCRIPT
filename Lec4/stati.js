class Dog {
    constructor(name) {
      this._name = name;
    }
  
    introduce() {
      console.log("This is " + this._name + " !");
    }
  
    static bark() {
      // static ใช้ได้เฉพาะ ตัวเจ้าของ class เท่านั้น มีไว้ใช้จัดการคลาส
      console.log("Woof!");
    }
  }
  
  const myDog = new Dog("ARD");
  myDog.introduce();
  
  Dog.bark(); // ตัวอย่าง
