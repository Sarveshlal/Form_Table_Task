var div = document.createElement('div')
div.classList.add('container','p-4')
var form = document.createElement('form')
var d1 = document.createElement('div')
d1.classList.add('row' ,'form-group')
var d11 = data('col-4');
d11.innerHTML = '<input type="text" placeholder="First name" class="form-control" id ="firstname" required>'
var d12 = data('col-4');
d12.innerHTML = '<input type="text" placeholder="Last Name" class="form-control" id="lastname" required>'
d1.append(d11,d12)

var d2 = document.createElement('div')
d2.classList.add('row' ,'form-group')
var d11 = data('col-5')
d11.innerHTML = '<input type="text" placeholder="Address" class="form-control" id="address" required>'
var d12 = data('col-3')
d12.innerHTML = '<input type="text" placeholder="Pincode" class="form-control" id = "code" required>'
d2.append(d11,d12)

var d3 = document.createElement('div')
d3.classList.add('row' ,'form-group', 'p-3')
var d11 = data("form-check", "form-check-inline", "col-3")
d11.setAttribute('id','male')
d11.innerHTML = '<input class="form-check-input gender" type="radio" value="Male" name="gender" id="inlineRadio1"><label class="form-check-label" for="inlineRadio1">Male</label>'
var d12 = data("form-check", "form-check-inline", "col-3")
d12.setAttribute('id','female')
d12.innerHTML = '<input class="form-check-input gender" type="radio" value="Female" name="gender" id="inlineRadio2"><label class="form-check-label" for="gender">Female</label>'
d3.append(d11,d12)

var d4 = document.createElement('div')
d4.classList.add('row' ,'form-group')
d4.innerHTML = '<div>Choice Of Food </div>'
var d11 = data('form-check')
d11.innerHTML = '<input class="form-check-input check food" type="checkbox" value="Indian" id="defaultCheck1">'
var l1 = label("form-check-label","defaultCheck1",'Indian')
d11.append(l1)
var d12 = data('form-check')
d12.innerHTML = '<input class="form-check-input check food" type="checkbox" value = "Chinese" id="defaultCheck2">'
var l2 = label("form-check-label","defaultCheck1",'Chinese')
d12.append(l2)
var d13 = data('form-check')
d13.innerHTML = '<input class="form-check-input check food" type="checkbox" value="Mexican" id="defaultCheck3">'
var l3 = label("form-check-label","defaultCheck1",'Mexican')
d13.append(l3)
d4.append(d11,d12,d13)

var d5 = document.createElement('div')
d5.classList.add('form-row')
var d11 = data('form-group','col-md-4')
d11.innerHTML = '<label for="inputCity">State</label><input type="text" class="form-control" id="inputcity" required>'
var d12 = data('form-group','col-md-4')
d12.innerHTML = '<label for="inputCity">Country</label><input type="text" class="form-control" id="inputcountry" required>'
d5.append(d11,d12)

form.append(d1,d2,d3,d4,d5)
var button = document.createElement('button')
button.setAttribute('type','submit')
button.setAttribute('id','sub')
button.classList.add('btn','btn-primary')
button.setAttribute('onclick','insert()')
button.innerHTML = 'Submit'
div.append(form,button)
document.body.append(div)


var table = document.createElement('table')
table.classList.add('container','table','table-striped','table-dark')
table.setAttribute('id','mytable')
var r1 = document.createElement('tr')
var d1 = td('First Name')
var d2 = td('Last name')
var d3 = td('Address')
var d4 = td('Pincode')
var d5 = td('Gender')
var d6 = td('Food Choice')
var d7 = td('State')
var d8 = td('Country')
r1.append(d1,d2,d3,d4,d5,d6,d7,d8)
table.append(r1)
document.body.append(table)



function td(heading){
    var d = document.createElement('td')
    d.innerHTML = heading
    return d
}

function insert(){
    let food = document.getElementsByClassName('food')
    let foodlist = [];
    let foodcount =0;
    for(var i =0;i<food.length;i++){
        if(food[i].checked){
            foodlist.push(food[i].value)
            foodcount++;
        }
    }
    console.log(foodlist)
    if(foodlist.length>=2)
        result = foodlist.join(', ')
    else
        result = alert("choose atleast 2 options")
    let genders = document.getElementsByClassName('gender').value
    var table = document.getElementById('mytable')
    var fname = document.getElementById('firstname').value
    var lname = document.getElementById('lastname').value
    var address = document.getElementById('address').value
    var pincode = document.getElementById('code').value
    var gender = genders
    var check = result
    var state = document.getElementById('inputcity').value
    var Country = document.getElementById('inputcountry').value
    var row = table.insertRow(1)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)
    var cell6 = row.insertCell(5)
    var cell7 = row.insertCell(6)
    var cell8 = row.insertCell(7)
    cell1.innerHTML = fname
    cell2.innerHTML = lname
    cell3.innerHTML = address
    cell4.innerHTML = pincode
    cell5.innerHTML = gender
    cell6.innerHTML = check
    cell7.innerHTML = state
    cell8.innerHTML = Country
    
}
function data(cls){
    var d = document.createElement('div')
    d.classList.add(cls)
    return d
}

function data(cls1,cls2){
    var d = document.createElement('div')
    d.classList.add(cls1,cls2)
    return d
}

function data(cls1,cls2,cls3){
    var d = document.createElement('div')
    d.classList.add(cls1,cls2,cls3)
    return d
}

function label(cls,val,element){
    var label = document.createElement('label')
    label.classList.add(cls)
    label.setAttribute('for',val)
    label.innerHTML = element
    return label
}