//** Deference between private and protected */
//&& protected can inheritance by his drives class but private can't inheritance.
class F11 {
  protected protectedMember: string;
  private privateMember: string;
  public publicMember: string;
  constructor(
    protectedMember: string = "protected",
    privateMember: string = "private",
    publicMember: string = "public"
  ) {
    this.privateMember = privateMember;
    this.protectedMember = protectedMember;
    this.publicMember = publicMember;
  }
}
class F22 extends F11 {
  constructor(
    protectedMember: string = "protected",
    privateMember: string = "private",
    publicMember: string = "public"
  ) {
    super(privateMember);
    // this.privateMember = privateMember; // send error it is only access with F11;
    this.protectedMember = protectedMember;
    this.publicMember = publicMember;
  }
}
const CF11 = new F22();
console.log(CF11, " => Line No: 20");

// Encapsulation is that how to use access modifiers in inheritance or drive classes
