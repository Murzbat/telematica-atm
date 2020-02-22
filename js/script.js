window.addEventListener('DOMContentLoaded', function(){
    //Calc
    let casset_number = document.getElementsByClassName('casset_number'),
        bank_calc = document.getElementsByClassName('bank_calc')[0],
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
        atm_properties = {
			casset_number: 0,
			casset_values: [],
			casset_amount: [],
			casset_condition: [],
			getting_amount: "0"

        }
	
    
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
				exist_cassets[7-i].remove()
				exist_value_for_cassets[7-i].remove()
			}
			for (let i=0; i<exist_value_for_cassets.length;i++){
				atm_properties.casset_values[i] = "100";
			}
		}
	})
	
	bank_calc_2_close.addEventListener('click', function(){
		bank_calc_2.style.display = 'none';
	})
	
	for (let i=0; i<exist_value_for_cassets.length;i++){
		exist_value_for_cassets[i].addEventListener('change', function(){
			atm_properties.casset_values[i] = exist_value_for_cassets[i].value 
			console.log(atm_properties.casset_values)
		})
	}
	//!!!!!!!!!!!!!!!!!!!!

	//going to the 3rd modal window

	next_btn_2.addEventListener('click',function(){
		bank_calc_2.style.display = 'none';
		for (let i=0; i < 8 - atm_properties.casset_number; i++){
			exist_cassets_3rd_pg[7-i].remove()
			exist_amount_for_cassets[7-i].remove()
		}
		bank_calc_3.style.display = 'block';
		for (let i = 0; i < exist_value_for_cassets.length; i++){
			atm_properties.casset_amount[i] = "0"
		}
		console.log(atm_properties.casset_amount)
	})

	for (let i = 0; i < exist_amount_for_cassets.length; i++){
		exist_amount_for_cassets[i].onkeyup = function (input){
      				  return this.value = this.value.replace(/[^\d]/g, '');
		};
		exist_amount_for_cassets[i].addEventListener('change', function(){
			atm_properties.casset_amount[i] = exist_amount_for_cassets[i].value
			console.log(atm_properties.casset_amount)
		})
	}
	bank_calc_3_close.addEventListener('click', function(){
		bank_calc_3.style.display = 'none';
	})
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	//going to 4th modal window page

	next_btn_3.addEventListener('click',function(){
		bank_calc_3.style.display = 'none';
		for (let i=0; i < 8 - atm_properties.casset_number; i++){
			exist_cassets_4rd_pg[7-i].remove()
			exist_condition_for_cassets[7-i].remove()
		}
		bank_calc_4.style.display = 'block';
		for (let i = 0; i < exist_condition_for_cassets.length; i++){
			atm_properties.casset_condition[i] = "1"
		}
		console.log(atm_properties.casset_condition)
		
	})
	
	for (let i=0; i<exist_condition_for_cassets.length;i++){

		
		exist_condition_for_cassets[i].addEventListener('change', function(){
			atm_properties.casset_condition[i] = exist_condition_for_cassets[i].value 
			console.log(atm_properties.casset_condition)
		})
	}

	bank_calc_4_close.addEventListener('click', function(){
		bank_calc_4.style.display = 'none';
	})

	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	//going to the 5th modal window page
	next_btn_4.addEventListener('click',function(){
		bank_calc_4.style.display = 'none';
		bank_calc_5.style.display = 'block';
	})

	bank_calc_5_close.addEventListener('click', function(){
		bank_calc_5.style.display = 'none';
	})

	getting_amount.onkeyup = function (input){
		return this.value = this.value.replace(/[^\d]/g, '');
	};
	getting_amount.addEventListener('change', function(){
		atm_properties.getting_amount = getting_amount.value
	})
	
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	//algoritm of this task 
	

	
});