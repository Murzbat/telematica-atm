window.addEventListener('DOMContentLoaded', function(){
    //Calc
	let casset_number = document.getElementsByClassName('casset_number'),
		atm = document.getElementsByClassName('glazing_slider')[0],
		atm_choice = document.getElementsByClassName('glazing_block'),
		bank_calc = document.getElementsByClassName('bank_calc')[0],
		bank_calc_content = bank_calc.getElementsByClassName('bank_calc_content')[0],
        bank_calc_close = document.getElementsByClassName('bank_calc_close')[0],
        cassets_icons_wraper = document.getElementsByClassName('cassets_icons_wraper')[0],
        show_casset_number = document.getElementById('show_casset_number'),
        next_btn_1 = document.getElementsByClassName('button')[0],
		bank_calc_2 = document.getElementsByClassName('bank_calc_2')[0],
		next_btn_2 = bank_calc_2.getElementsByClassName('button')[0],
		bank_calc_2_close = bank_calc_2.getElementsByClassName('bank_calc_close')[0], 
		exist_cassets = bank_calc_2.getElementsByTagName('a'),
		exist_value_for_cassets = bank_calc_2.getElementsByTagName('select'),
		bank_calc_3 = document.getElementsByClassName('bank_calc_3')[0],
		bank_calc_3_close = bank_calc_3.getElementsByClassName('bank_calc_close')[0],
		next_btn_3 = bank_calc_3.getElementsByClassName('button')[0],
		exist_cassets_3rd_pg = bank_calc_3.getElementsByTagName('a'),
		exist_amount_for_cassets = bank_calc_3.getElementsByTagName('input'),
		bank_calc_4 = document.getElementsByClassName('bank_calc_4')[0],
		bank_calc_4_close = bank_calc_4.getElementsByClassName('bank_calc_close')[0],
		next_btn_4 = bank_calc_4.getElementsByClassName('button')[0],
		exist_cassets_4rd_pg = bank_calc_4.getElementsByTagName('a'),
		exist_condition_for_cassets = bank_calc_4.getElementsByTagName('select'), 
		bank_calc_5 = document.getElementsByClassName('bank_calc_5')[0],
		getting_amount = bank_calc_5.getElementsByClassName('form_for_getting')[0],
		next_btn_5 = bank_calc_5.getElementsByClassName('button')[0],
		bank_calc_5_close = bank_calc_5.getElementsByClassName('bank_calc_close')[0],
		bank_calc_6 = document.getElementsByClassName('bank_calc_6')[0],
		bank_calc_6_close = bank_calc_6.getElementsByClassName('bank_calc_close')[0],
		bank_calc_6_end = bank_calc_6.getElementsByClassName('button')[0],
		answer = bank_calc_6.getElementsByClassName('answer')[0],
		bank_calc_6_show = bank_calc_6.getElementsByClassName('show_info'),
		popup = document.getElementsByClassName('popup')[0],
		popup_close = popup.getElementsByClassName('popup_close')[0],
        atm_properties = {
			casset_number: 0,
			casset_values: [],
			casset_amount: [],
			casset_condition: [],
			getting_amount: 0

		}
	
	let exist_cassets_help = [],
		exist_value_for_cassets_help = []
		for (let i = 0; i< exist_cassets.length; i++){
			exist_cassets_help[i] = exist_cassets[i]
			exist_value_for_cassets_help[i] = exist_value_for_cassets[i]
		}
	
	// exist_cassets.push(0)
	console.log(atm_choice)
	


	//Popup window for recruiting

		
	popup_close.addEventListener('click', function(){
		popup.style.display = 'none'
	})

	atm.addEventListener('click',function(){
	
			// bank_calc_content.style.backgroundImage= "url('../img/1.png')";
	
	
		bank_calc.style.display = 'block'
	
           
		show_casset_number.innerHTML = atm_properties.casset_number;
	
		

	
	})

    cassets_icons_wraper.addEventListener('click',function(){
        // console.log(event.target)
        for (let i=0; i < casset_number.length;i++) {
            if (event.target == casset_number[i]) {
                atm_properties.casset_number = i+1
            }
        }
        
        show_casset_number.innerHTML = atm_properties.casset_number
    })
	
	bank_calc_close.addEventListener('click', function(){
		bank_calc.style.display = 'none';
		atm_properties.casset_number = 0;
		show_casset_number.innerHTML = atm_properties.casset_number;

	})
	//!!!!!!!!!!!!!!!!!!!!

    //going to the 2nd modal page
	
	next_btn_1.addEventListener('click',function(){

		if (atm_properties.casset_number == 0) {
            show_casset_number.innerHTML = 'Количество не может быть 0'
        } else {

			bank_calc.style.display = 'none';
			bank_calc_2.style.display = 'block';
			for (let i=0; i < 8 - atm_properties.casset_number; i++){
				exist_cassets[7-i].style.display = 'none'
				exist_value_for_cassets[7-i].style.display = 'none'
			}
			for (let i=0; i<atm_properties.casset_number;i++){
				atm_properties.casset_values[i] = 100;
			}
		}
	})
	
	bank_calc_2_close.addEventListener('click', function(){
		bank_calc_2.style.display = 'none';
		atm_properties.casset_number = 0;
		for (let i=0; i < 8 ; i++){
			exist_cassets[i].style.display = 'block'
			exist_value_for_cassets[i].style.display = 'block'
			atm_properties.casset_values[i] = 100;
			exist_value_for_cassets[i].value = 100;
		}

		


	})
	
	for (let i=0; i<exist_amount_for_cassets.length;i++){
		exist_value_for_cassets[i].addEventListener('change', function(){
			atm_properties.casset_values[i] = +exist_value_for_cassets[i].value 
			console.log(atm_properties.casset_values)
		})
	}
	//!!!!!!!!!!!!!!!!!!!!

	//going to the 3rd modal window

	next_btn_2.addEventListener('click',function(){
		bank_calc_2.style.display = 'none';
		for (let i=0; i < 8 - atm_properties.casset_number; i++){
			exist_cassets_3rd_pg[7-i].style.display = 'none'
			exist_amount_for_cassets[7-i].style.display = 'none'
		}
		bank_calc_3.style.display = 'block';
		for (let i = 0; i <atm_properties.casset_number; i++){
			atm_properties.casset_amount[i] = 0
		}
		console.log(atm_properties.casset_amount)
		console.log(atm_properties.casset_number)
		console.log()

	})
	console.log(exist_amount_for_cassets)
	console.log(atm_properties.casset_number)

	for (let i = 0; i < exist_amount_for_cassets.length; i++){

		exist_amount_for_cassets[i].onkeyup = function (input){
      				  return this.value = this.value.replace(/[^\d]/g, '');
		};
		exist_amount_for_cassets[i].addEventListener('change', function(){
			atm_properties.casset_amount[i] = +exist_amount_for_cassets[i].value
			console.log(atm_properties.casset_amount)
		})
	}
	bank_calc_3_close.addEventListener('click', function(){
		bank_calc_3.style.display = 'none';
		atm_properties.casset_number = 0;
		for (let i=0; i < 8 ; i++){
			exist_cassets[i].style.display = 'block'
			exist_value_for_cassets[i].style.display = 'block'
		}
		for (let i=0; i < 8 ; i++){
			exist_amount_for_cassets[i].style.display = 'block'
			exist_cassets_3rd_pg[i].style.display = 'block'
		}
		for (let i=0; i<exist_value_for_cassets.length;i++){
			atm_properties.casset_values[i] = 100;
			exist_value_for_cassets[i].value = 100;
		}
		for (let i = 0; i < exist_value_for_cassets.length; i++){
			atm_properties.casset_amount[i] = 0
			exist_amount_for_cassets[i].value = 'Количество купюр'
		}
		

	})
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	//going to 4th modal window page

	next_btn_3.addEventListener('click',function(){
		bank_calc_3.style.display = 'none';
		for (let i=0; i < 8 - atm_properties.casset_number; i++){
			exist_cassets_4rd_pg[7-i].style.display = 'none'
			exist_condition_for_cassets[7-i].style.display = 'none'
		}
		bank_calc_4.style.display = 'block';
		for (let i = 0; i < exist_condition_for_cassets.length; i++){
			atm_properties.casset_condition[i] = 1
		}
		console.log(atm_properties.casset_condition)
		
	})
	
	for (let i=0; i<8;i++){

		
		exist_condition_for_cassets[i].addEventListener('change', function(){
			atm_properties.casset_condition[i] = +exist_condition_for_cassets[i].value 
			console.log(atm_properties.casset_condition)
		})
	}

	bank_calc_4_close.addEventListener('click', function(){
		bank_calc_4.style.display = 'none';
		atm_properties.casset_number = 0;
		for (let i=0; i < 8 ; i++){
			exist_cassets[i].style.display = 'block'
			exist_value_for_cassets[i].style.display = 'block'
			// 
			exist_amount_for_cassets[i].style.display = 'block'
			exist_cassets_3rd_pg[i].style.display = 'block'
			// 
			atm_properties.casset_values[i] = 100;
			exist_value_for_cassets[i].value = 100;
			// 
			atm_properties.casset_amount[i] = 0
			exist_amount_for_cassets[i].value = 'Количество купюр'
			// !!!
			atm_properties.casset_condition[i] = 1
			exist_condition_for_cassets[i].value = "1"
			exist_cassets_4rd_pg[i].style.display = 'block'
			exist_condition_for_cassets[i].style.display = 'block'
			
		}
		

	})

	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	//going to the 5th modal window page
	next_btn_4.addEventListener('click',function(){
		bank_calc_4.style.display = 'none';
		bank_calc_5.style.display = 'block';
	})

	bank_calc_5_close.addEventListener('click', function(){
		bank_calc_5.style.display = 'none';
		atm_properties.casset_number = 0;
		for (let i=0; i < 8 ; i++){
			exist_cassets[i].style.display = 'block'
			exist_value_for_cassets[i].style.display = 'block'
			// 
			exist_amount_for_cassets[i].style.display = 'block'
			exist_cassets_3rd_pg[i].style.display = 'block'
			// 
			atm_properties.casset_values[i] = 100;
			exist_value_for_cassets[i].value = 100;
			// 
			atm_properties.casset_amount[i] = 0
			exist_amount_for_cassets[i].value = 'Количество купюр'
			// !!!
			atm_properties.casset_condition[i] = 1
			exist_condition_for_cassets[i].value = "1"
			exist_cassets_4rd_pg[i].style.display = 'block'
			exist_condition_for_cassets[i].style.display = 'block'
			
		}
		atm_properties.getting_amount = 0;
		getting_amount.value = "0"

	})

	getting_amount.onkeyup = function (input){
		return this.value = this.value.replace(/[^\d]/g, '');
	};
	getting_amount.addEventListener('change', function(){
		atm_properties.getting_amount = +getting_amount.value
	})
	
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	//algoritm of this task 
	next_btn_5.addEventListener('click', function(){
		bank_calc_5.style.display = 'none';
		console.log(atm_properties.casset_number)
		console.log(atm_properties.casset_values)
		console.log(atm_properties.casset_amount)
		console.log(atm_properties.casset_condition)
		console.log(atm_properties.getting_amount)



		
		let using_cassets = [],
			arr_for_casset_values = [],
			target_amount = atm_properties.getting_amount
		for (let i=0; i<atm_properties.casset_number;i++){
			using_cassets[i] = 0
			arr_for_casset_values[i] = atm_properties.casset_values[i] 
		}
		for (let i=0; i<atm_properties.casset_number; i++){
			let max = Math.max(...arr_for_casset_values),
				max_id = arr_for_casset_values.indexOf(max)
				console.log(max,' ',max_id)
				console.log(Math.floor(target_amount/max))

			if (Math.floor(target_amount/max) >= atm_properties.casset_amount[max_id]) {
					using_cassets[max_id] = atm_properties.casset_amount[max_id]*atm_properties.casset_condition[max_id]
					
					target_amount = target_amount - max*atm_properties.casset_amount[max_id]*atm_properties.casset_condition[max_id]
					console.log(target_amount)
					console.log(using_cassets)
					arr_for_casset_values[max_id] = 0

				
			} else {
				using_cassets[max_id] = Math.floor(target_amount/max)*atm_properties.casset_condition[max_id]
				
				target_amount = target_amount - max * Math.floor(target_amount/max)*atm_properties.casset_condition[max_id]
				console.log(target_amount)
				console.log(using_cassets)
				arr_for_casset_values[max_id] = 0
			}
			if (target_amount == 0) {
				break
			}
		}
		if (target_amount == 0) {
			answer.innerHTML = 'Можно'
			
			for (let i =0; i<using_cassets.length; i++){
				console.log('Можно выдать: Из кассеты с '+atm_properties.casset_values[i] +' '+ using_cassets[i]+'купюр')
				bank_calc_6_show[i].innerHTML = using_cassets[i];
				// if (atm_properties.cass){}

			}
		} else {
			answer.innerHTML = 'Нельзя'
			for (let i =0; i<using_cassets.length; i++){
				console.log('Нельзя')
				bank_calc_6_show[i].innerHTML = '';

				
			}
				
		}
		console.log(using_cassets);
		atm_properties.casset_number = 0;
		bank_calc_6.style.display = 'block';




	}) 

	bank_calc_6_close.addEventListener('click', function(){
		bank_calc_6.style.display = 'none'
		for (let i=0; i < 8 ; i++){
			exist_cassets[i].style.display = 'block'
			exist_value_for_cassets[i].style.display = 'block'
			// 
			exist_amount_for_cassets[i].style.display = 'block'
			exist_cassets_3rd_pg[i].style.display = 'block'
			// 
			atm_properties.casset_values[i] = 100;
			exist_value_for_cassets[i].value = 100;
			// 
			atm_properties.casset_amount[i] = 0
			exist_amount_for_cassets[i].value = 'Количество купюр'
			// !!!
			atm_properties.casset_condition[i] = 1
			exist_condition_for_cassets[i].value = "1"
			exist_cassets_4rd_pg[i].style.display = 'block'
			exist_condition_for_cassets[i].style.display = 'block'
			
		}
		atm_properties.getting_amount = 0;
		getting_amount.value = "0"
	})
	bank_calc_6_end.addEventListener('click',function(){
		bank_calc_6.style.display = 'none'
		popup.style.display = 'block'
		for (let i=0; i < 8 ; i++){
			exist_cassets[i].style.display = 'block'
			exist_value_for_cassets[i].style.display = 'block'
			// 
			exist_amount_for_cassets[i].style.display = 'block'
			exist_cassets_3rd_pg[i].style.display = 'block'
			// 
			atm_properties.casset_values[i] = 100;
			exist_value_for_cassets[i].value = 100;
			// 
			atm_properties.casset_amount[i] = 0
			exist_amount_for_cassets[i].value = 'Количество купюр'
			// !!!
			atm_properties.casset_condition[i] = 1
			exist_condition_for_cassets[i].value = "1"
			exist_cassets_4rd_pg[i].style.display = 'block'
			exist_condition_for_cassets[i].style.display = 'block'
			
		}
		atm_properties.getting_amount = 0;
		getting_amount.value = "0"
	})


	
});