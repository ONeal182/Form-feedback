$(function(event){

///firstForm
	var elem1 = $('.length1');
	var select = $('.select')
	var elem2 = $('.height1');
	var checkbox = $('.checkbox');
	var app = $('.firstForm')
	var next = $('.next');
	var allElem = $('.firstForm__length__input')
	var selectSum = parseInt(select.val())
	var price = $('.price')
	
		
		
		
		




function Validate(elem1, elem2){
		
	this.elem1 = elem1;
	this.elem2 = elem2;

	var done1 = $('#1');
	var done2 = $('#2');
			
			elem1.on('change', this.inputLength = function(){
			
			if(isNaN(elem1.val()) || elem1.val() =='' || elem1.val()==' ' || elem1.val()==0){
			
			elem1.attr('id','error');
			
			done1.addClass('hide');
			
			var error = true;
			price.text(0)
			}

		else{
			elem1.attr('id','');
			
			done1.removeClass('hide');
			
			var error = false
		}
			return error
			
		})
	
		elem2.on('change', this.inputHeight =function(){
			
			if(isNaN(elem2.val()) || elem2.val() =='' || elem2.val()==' ' || elem2.val()==0 || elem2.val().substring(0,1) == 0){
			elem2.attr('id','error');
			done2.addClass('hide');
			var error = true;
			price.text(0)
			
		}

		else{
			elem2.attr('id','');
			done2.removeClass('hide');
			
			var error = false
			
			}

		return error
		
	})
}
var validateFunc = new Validate(elem1, elem2);
function checkError(allElem){
	this.allElem = allElem
	
	allElem.children('#input').on('input', this.checked = function(){
			if(validateFunc.inputLength() != false || validateFunc.inputHeight() != false){
			next.css('background-image', 'url(../img/Button.png)').prop('disabled', true)
			var sumInput = 0;
		}
		else{
			var selectVal =  parseInt($('.select').val())
			var elem1Sum = parseInt(elem1.val())
			var elem2Sum = parseInt(elem2.val())
			var sumInput = (elem1Sum * elem2Sum * selectVal)
			next.css('background-image', 'url(../img/Button-Active.png)').prop('disabled', false)
			
			
			}
			return sumInput

		})
	


}

function CheckboxFunc(checkbox){
	this.checkbox = checkbox
	checkbox.on('change', this.check = function(){
		if(checkbox.is(':checked')){
		var checkboxValue = checkbox.val(200)
	}
		else{
		var checkboxValue = checkbox.val(0)

		}
		
	})

	
}

var checkBoxFunc = new CheckboxFunc(checkbox);
var done = new checkError(allElem)
app.on('input', function(){
	checkBoxFunc.check();
	var sumElem = done.checked()
	var checkboxSum = parseInt(checkbox.val())
	
	


	if(done.checked() != 0){
		var summa = $('.price').text(sumElem + checkboxSum + ' ' + '₽')
		// $('.sum').text(summa.text())
	}
	
	
	
})
$('.next').on('click', function(){
	if(validateFunc.inputLength() == false || validateFunc.inputHeight() == false){
		$('.firstForm').css('display', 'none');
		$('.secondForm').css('display', 'block');
		$('.prev input').css('display', 'block');

		
	}
		
})
////secondForm
var prevButton = $('.prev input');
var name = $('.name');
var email = $('.email')
var phone = $('.phone')
var buttonSubmit = $('.submitForm')
var secondFormName = $('.secondForm__name i')
var secondFormEmail = $('.secondForm__email i')
var secondFormPhone = $('.secondForm__phone i')
var secondFormAll = $('.secondForm input');


	prevButton.on('click', function(){
		$('.firstForm').css('display', 'block');
		$('.secondForm').css('display', 'none');
		$('.prev input').css('display', 'none');
	})
  
  $(".phone").mask("8(999) 999-9999");




function ValidForm(name, email, phone){
	this.name = name;
	this.email = email;
	this.phone = phone

	name.on('input', this.nameValid = function(){
		if(name.val() == '' || name.val() == ' ' ||  isNaN(name.val()) == false || name.val().length < 3){
			name.attr('id','error');
			secondFormName.addClass('hide');
			var errorSecond = false

		}
		else{
			name.attr('id','');
			secondFormName.removeClass('hide')
			
		}
		return errorSecond
		
	})
	email.on('input', this.emailValid = function(){
		if(email.val().length > 0 && (email.val().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || []).length !== 1 || email.val() == '' || email.val() == ' ')
		{
			email.attr('id','error');
			secondFormEmail.addClass('hide')
			var errorSecond = false
		}
		else{
			email.attr('id','');
			secondFormEmail.removeClass('hide')
			
		}
		return errorSecond
		
	})
	
	phone.on('change',this.phoneValid = function(){

		if(phone.val().length < 10 || phone.val().length == 0){
			phone.attr('id','error');
			secondFormPhone.addClass('hide')
			var errorSecond = false
		}
		else{
			
			phone.attr('id','');
		secondFormPhone.removeClass('hide')
		}
		return errorSecond
	})



}


function declOfNum(number, titles)  
{  
    cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}

				


var nameVal = name.val();
var validForm = new ValidForm (name, email, phone);
	function AllElem2 (secondFormAll, buttonSubmit){
		this.secondFormAll = secondFormAll;
		this.buttonSubmit = buttonSubmit

		secondFormAll.on('input', function(){
		if(validForm.nameValid() != false && validForm.emailValid() != false && validForm.phoneValid() != false){
			buttonSubmit.css('background-image', 'url(../img/submit-Active.png)').prop('disabled', '')
			var material = $('option:selected').attr('data-id')
			
			var infoText = name.val() + ' ' +'вы укомплектовали забор'+ ' ' + '<span class="spanInfo">длиной '+ elem1.val() + ' '+ declOfNum(elem1.val(), ['метр', 'метра', 'метров'])+ '</span>' + ' ' + 'и' + ' ' + '<span class="spanInfo">высотой '+ elem2.val() + ' ' +  declOfNum(elem2.val(), ['метр', 'метра', 'метров'])+ '</span>' + ' ' +
			 'из' + ' ' + material + ' ' + 'на сумму' + ' ' + '<span class="sum"> '+ price.text() +' '+'</span>'
			$('.info').html(infoText)
		
		}
		else{
			var infoText = ' ';
			$('.info').html(infoText)
			buttonSubmit.css('background-image', 'url(../img/submit.png)').prop('disabled', 'disabled')
			
		}

		
			
		
	})
	}

var allElem2 = new AllElem2(secondFormAll, buttonSubmit);
	buttonSubmit.on('click', function(){
		
		if($('.secondForm input').val() == ''){

			$('.secondForm .secondForm__input').attr('id','error');
		}
	})

	

	

	$('.formApp').on('submit', function(e){
		e.preventDefault()
		 $.ajax({

    	type:     "POST",
        url:     "mail.php",
        data: $(this).serialize(),
        success: function(data) {
        	var me = JSON.parse(data);
        
         $('.answer').css('display', 'block');
		$('.secondForm').css('display', 'none');
		$('.prev input').css('display', 'none');
		$('.answer .wrapper').html('<h1>'+me.name+' ваш заказ <span>№'+me.number+'</span> сформирован!</h1>'+
				'<p>Мы повторили его компиляцию на почту<span>'+' '+email.val()+'</span></p>'+
				'<p>В ближайшее время наш специалист свяжится с вами по телефону<span>'+' '+phone.val()+'</span></p>'
				)

        	
    	},
    	error: function() {
            console.log(1);
    	}


 	});
		 
		
			
		})
	
	

	


})
