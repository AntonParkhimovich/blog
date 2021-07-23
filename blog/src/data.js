const data = [
    {
    avatarSrc:'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
    nickname: 'Ch1pZ',
    firstname:'Anton',
    lastname:'Parkhimovich',
     born: '19.07.1997',   
    aboutme:"code this shit",
    posts:[]
},{
    avatarSrc:'data:image/png;base64,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',
    nickname:'Guest',
    posts:[]
},{
  username:'admin',
  password: "admin",
  login: false,
  context: false
}
]  

const setData =()=>{
        if(localStorage.getItem('userInfo') === null){
          localStorage.setItem('userInfo', JSON.stringify(data))
        }
}
export default setData

