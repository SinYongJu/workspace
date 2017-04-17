function bit(value){
  var el =[]
  if(value instanceof HTMLElement){// 파라미터값이 태그이고 값이 있다면 참!
    el[0] = value // 무조건 태그를 배열에 넣음!
  } else if (value.startsWith('<')){
    el[0] = document.createElement(value.substr(1, value.length-2))
  } else {
    //css selector 문법으로 간주하여 처리한다.
    var list = document.querySelectorAll(value)
    for (var e of list){
      el.push(e) //value에 해당하는 태그들을 추출하여 list에
      //저장하고 list 안의 프로퍼티 key를 e에 저장
      // push를 사용하여 배열 끝에 추가!
    }
  }//우선 스크립트 안의 태그들을 뽑아 낸다!


// 배열에 들어잇는 태그에 대해 자식 태그를 추가하는 함수
  el.append = function(children){
    if(!(children instanceof Array)){
      console.error('배열이 아닙니다.')
      return;
    }
    for (var e of this){
      for (var child of children){
        e.appendChild(child)
      }
    }
    return this
  }//append

//배열 안에 있는 태그의 콘텐츠를 설정하는 함수
  el.html = function(content) {
    for(var e of this){
      e.innerHTML = content
    }
    return this
  }

// 배열안에 잇는 태그에 클릭 이벤트 핸들러를 추가하는 함수
el.click = function(listener){
  for(var e of this){
    e.addEventListener('click', listener)
  }
  return this
}

// 배열 안에 잇는 태그의 속성 값을 다루는 함수
// 개발자가 태그에 추가한 속성을 다룬다
// 개발자가 추가한 속성은
//getAttribute로 꺼내고 setAttribute로 넣는다.
// 태그에 원래 잇던 속성에 대해서도 사용 가능
// but "checked"와 같은 일부 속성은 정요할 수 없다.

el.attr = function(name, value){
  if(arguments.length < 2) {
    return this[0].getAttribute(name)
  }else{
    for (var e of this){
      e.setAttribute(name, value)
    }
    return this
  }
}

// 배열 안에 있는 태그를 부모 태그에 추가시키는 함수
el.appendTo = function(parents){
  for(var p of parents){
    for(var e of this){
      p.appendChild(e)
    }
  }
  return this;
}

// 배열 안에 있는 각각의 태그에 대해 css스타일을 다루는 함수
el.css = function(name, value){
  for(var e of this){
    e.style[name] = value
  }
  return this
}

// 배열 안의 태그의 프로퍼티의 값을 다루는 함수
//=> 개발자가 태그에 초가한 속성이 아닌 원래 있던 속성의 값을 다루는 함수
//=> getAttribute()/setAttribute() 대신 "태그명.속성명",
//"태그명.속성명= 값"으로 다룬다.

el.prop = function(name, value){
  if(arguments.length<2){
    return this[0][name]
  } else {
    for(var e of this){
      e[name] = value
    }
    return this
  }
}//prop


return el


}//bit function
var $ = bit;



// bit()함수가 리턴한 배열에 대해 작업 없고
// 독자적으로 작업하는 함수는 bit()객체에 직접보관한다.


bit.ajax = function(url, settings) {
  if(settings == undefined){
    settings = {
      method: 'GET',
      dataType: 'text'
    }
  } else {
    if(settings.method == undefined) settings.method = 'GET'
    if(settings.dataType == undefined) settings.dataType = 'text'

  }
  var xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function(){
    if (xhr.readyState < 4)
    return
    var rv;
    if(settings.dataType=='json'){
      rv = JSON.parse(xhr.responseText)
    } else {
      rv = xhr.responseText
    }

    if(settings.success){
      settings.success(rv)
    }
  }//xhr.onready
  xhr.open(settings.method, url, true)
  if(settings.method == 'POST'){
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    var queryString = ""
    if(settings.data){
      for (var propName in settings.data){
        if(queryString.length > 0){
          queryString += "&"
        }
        queryString += propName + '=' + settings.data[propName]
      }
    }
    xhr.send(queryString)
  }else{
    xhr.send()
  }
}//open

bit.getJSON = function(url, success) {
  bit.ajax(url, {
    dataType: 'json',
    success: success
  })
}

bit.post = function(url, data, success, dataType){
  bit.ajax(url,{
    method: 'POST',
    dataType: dataType,
    data: data,
    success: success
  })
}


}//ajax
