function ShowTime(){
    var date=new Date()
    var h=date.getHours()
    var m=date.getMinutes()
    var s=date.getSeconds()
    var session='AM'
    var w=date.getDay()
    var mo=date.getMonth()
    var weekNames=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat']
    var monthNames=['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var tm=date.getFullYear()

    if(h===0){
        h=12
    }
    if (h>12) {
        h=h-12
        session='PM'
    }

    h=(h<10)? '0'+h:h
    m=(m<10)? '0'+m:m
    s=(s<10)? '0'+s:s

    var time=h+' : '+m+' : '+s+' '+session
    $('#hours').text(h)
    $('#minutes').text(m)
    $('#seconds').text(s)
    $('#session').text(session)
    $('#day').text('Day: '+weekNames[w])
    $('#month').text('Month: '+monthNames[mo])
    $('#time-zone').text(tm)
    setTimeout(ShowTime,1000)
}
ShowTime()
