//껄껄 Jquery 만들기
//함수의 내용만 써놨어요 구글링 하세요!
function bit(value) {
  var el = []
  //우선 list나 view페이지의 태그들을 솎아내야한다.
  if (value instanceof HTMLElement){  //instanceof 연산자는 생성자의 prototype 속성과 묶인 프로토타입을 가진 오브젝트인지를 테스트합니다.
    el[0] = vlaue
  } else if (value.startsWith('<')){ //startsWith() 메소드는 어떤 문자열이 특정 문자로 시작하는지 확인 할 수 있으며, 그 결과는 true 혹은 false로 반환된다.
    el[0] = document.createElement(vlaue.substr(1, value.length-2))//The substr() 메서드는 문자열에서 특정 위치에서 시작하여 특정 문자수만큼의 문자들을 반환합니다.
  } else {
    // css selector문법으로 간주하여 처리하자!
    var list = document.querySelectorAll(value)
    for(var e of list){
      el.push(e)//파라미터 안의 태그들을 추출하여 리스트에 저장
      // 저장하고 list안의 프러퍼티 key를 e에 저장한다!
      //push 함수를 이용 el의 배열의 끝에 추가추가!
    }
  }//if 솎아내기!
// 배열안에 이러한 태그들을 넣으므로써의 이점은 프러퍼티들을 확그냥 마그냥 이름으로 불러재끼는 번거로움을
//피하고 [0]으로 꺼내기 요긴함이 더 큰듯 (사견임)

//배열에 속해 있는 태그들(추출한것들)에 대한 함수들을 만들자!

//1
el.append = function(children) {
  if(!(children instanceof Array)){
    console.log('응! 배열아냐~')
    return;
  }

  for (var e of this) {
    for (var child of children){
      e.appendChild(child)
    }
  }
  console.log(this)
  return this
  // 과정상 일단 파라미터가 배열 생성자의 prototype 속성과 묶이냐를 판단하고 시작!
  // 맞다면 el이라는 객체에서 프러 퍼티를 추출하고 파라미터 값의 프러퍼티를 추출하여 appendChild함수에 적용시키고 그 값을 리턴하면서 함수 끝!
}//append

//2
el.html = function(content) {
  for(var e of this){
    e.innerHTML =content
  }
  return
}

// 3 배열 안에 잇는 태그에 클릭 이벤트 핸들러를 추가하는 함수
el.click = function(listener) {
  for (var e of this) {
    e.addEventListener('click', listener)
  }
  return this
}// 일단 쿼리를 만들어 가면서 보는 거지만 함수를 적용시킬 때 파라미터의 개수 같은걸 설정하거나 할 수 있는듯

el.attr = function(name, value) {
  if(arguments.length < 2){ // 특정 이름을 가진 속성의 값을 꺼낸다.
    // 값을 꺼낼 때는 배열에서 0번 방에 들어 잇는 태그의 속성 값만 꺼내자
    return this[0].getAttribute(name)  //꺼낼때
  }else {
    for(var e of this){
      e.setAttribute(name, value)// 넣을때
    }
    return this
  }
}// 여기는 구글링 요망! get set (욕아님)

el.appendTo = function(parents) {
  for (var p of parents){
    for(var e of this){
      p.appendChild(e)
    }
  }
  return this;
}

el.css = function(name, value){
  for(var e of this){
    e.style[name] = value
  }
  return this
}

el.text = function(content){
  for(var e of this){
    e.textContent = content  // 요고 textContent라는 속성을 만지는 거에요!
  }
  return this
}

el.val = function(value){
  if (arguments.length==0){ //value 파라미터 값이 없으면, 현재 value 꺼낸다.
    return this[0].value
  }

  for(var e of this){
    e.value = value
  }
  return this
}//val

el.prop = function(){
  if(arguments.length < 2) {
    return this[0][name] // 특정 이름을 가진 프러퍼티 값을 꺼냄!
  }else {
    for(var e of this){
      e[name] = value
    }
    return this
  }
}
// 결론 : value에 들어 온  태그들을 추출해서(배열에 넣음) 해당 함수안에 넣고 돌려 el에 다시 넣어서 그걸 보여드림!
//의문 callback 함수에 대하여!  콜백 함수는 파라메터를 통해 다음 실행지점을 지시하는 함수를 전달한다.
return el

}//f bit
var $ = bit;

//bit()함수가 리턴한 배열에 대해 작업하지 않고 독자적으로 작업하는 함수는 bit객체에 직접 보관한다.

bit.ajax = function(url, settings) {
  if (settings == undefined) {
    setttings={
    method : 'get',
    dataType: 'text'
    }// settings객체
  } else {
    if(!(settings.method))settings.method='GET'
    if(!(settings.dataType))setting.dataType='text'
  }//settings if
  var xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function(){
    if( xhr.readyState < 4)
    return
    var rv;
    if(settings.dataType=='json'){
      re = JSON.parse(xhr.responseText)
    } else{
      rv = xhr.responseText
    }

    if(settings.success){
      settings.success(rv)
    }
  }//xhr.onreadystatechange
  xhr.open(settings.method, url, true)
  if(settings.data){
    for(var propName in settings.data){
      if(queryString.length > 0){ //queryString은 url의 쿼리 부분을 문자열로 가져옴!
        queryString+= "&"
        }
        queryString += propName + '=' + settings.data[propName]
    }
  }//if
  xhr.send(queryString)} else {xhr.send()}//else
}//open

bit.getJSON = function(url, success) {
  bit.ajax(url, {
    dataType: 'json',
    success: success
  })
}

bit.post = function(url, data, success, dataType){
  bit.ajax(url,{
    method: 'post',
    dataType: dataType,
    data: data,
    success: success
  })
}

}//bit ajax
