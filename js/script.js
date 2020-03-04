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
		bank_calc_6_show_condition = bank_calc_6.getElementsByClassName('show_condition'),
		bank_calc_6_show_amount = bank_calc_6.getElementsByClassName('show_amount'),
		bank_calc_6_show_value = bank_calc_6.getElementsByClassName('show_value'),
		answer_cassets = bank_calc_6.getElementsByTagName('a'),
		answer_summ = bank_calc_6.getElementsByClassName('answer_summ')[0],
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
			// console.log(atm_properties.casset_values)
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
		

	})


	for (let i = 0; i < exist_amount_for_cassets.length; i++){

		exist_amount_for_cassets[i].onkeyup = function (input){
      				  return this.value = this.value.replace(/[^\d]/g, '');
		};
		exist_amount_for_cassets[i].addEventListener('change', function(){
			atm_properties.casset_amount[i] = +exist_amount_for_cassets[i].value
			// console.log(atm_properties.casset_amount)
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
		
	})
	
	for (let i=0; i<8;i++){

		
		exist_condition_for_cassets[i].addEventListener('change', function(){
			atm_properties.casset_condition[i] = +exist_condition_for_cassets[i].value 
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

	
	next_btn_5.addEventListener('click', function(){
		bank_calc_5.style.display = 'none';
		let coins = [],
			needCoins1,
			needCoins = []

		for (let i=0; i< atm_properties.casset_number;i++){
			coins[i] = {val:atm_properties.casset_values[i], count: atm_properties.casset_amount[i]*atm_properties.casset_condition[i]}
			console.log(coins[i].count)
			console.log(atm_properties.casset_condition[i])
		}

		answer_summ.innerHTML = atm_properties.getting_amount
		console.log(coins)
		console.log(atm_properties.getting_amount)
		
		

		
		needCoins1 = givingMoney(atm_properties.getting_amount,coins)
		console.log(needCoins1)
		if (needCoins1.length == 0) {
				answer.innerHTML = 'Нельзя'
				for (let i =0; i<atm_properties.casset_number; i++){
					bank_calc_6_show[i].innerHTML = '';
					bank_calc_6_show_amount[i].innerHTML = atm_properties.casset_amount[i];
					if (atm_properties.casset_condition[i] == 1) {
						bank_calc_6_show_condition[i].innerHTML = 'Исправна';
					} else {
						bank_calc_6_show_condition[i].innerHTML = 'Неисправна';
					}
					bank_calc_6_show_value[i].innerHTML = atm_properties.casset_values[i];
				}
				
				
		} else {
				for(let i=0; i<needCoins1.length; i++){
					if (isNaN(needCoins1[i].count )){
						needCoins1[i].count = 0
					}
				}
				console.log(needCoins1)
				// console.log('cassets '+atm_propert)
				for (let i=0;i < atm_properties.casset_number ; i++){
					for (let j = 0; j < needCoins1.length; j++){ 
						if (atm_properties.casset_values[i] == needCoins1[j].value && atm_properties.casset_amount[i] != 0){
							if (needCoins1[j].count < atm_properties.casset_amount[i]) {
								needCoins[i] = needCoins1[j].count
								console.log(1)
							} else {
								needCoins[i] = atm_properties.casset_amount[i]
								needCoins1[j].count = needCoins1[j].count - atm_properties.casset_amount[i]
								console.log(2)
							}
						}
					}
				}
				console.log(needCoins)
				answer.innerHTML = 'Можно'
				for (let i =0; i<atm_properties.casset_number; i++){
					if (needCoins[i] == undefined){
						bank_calc_6_show[i].innerHTML = 0;
					} else {
						bank_calc_6_show[i].innerHTML = needCoins[i];
					}
					bank_calc_6_show_amount[i].innerHTML = atm_properties.casset_amount[i];
					bank_calc_6_show_value[i].innerHTML = atm_properties.casset_values[i];
					if (atm_properties.casset_condition[i] == 1) {
						bank_calc_6_show_condition[i].innerHTML = 'Исправна';
					} else {
						bank_calc_6_show_condition[i].innerHTML = 'Неисправна';
					}
	
				}
					
		}

		for (let i=0; i < 8 - atm_properties.casset_number; i++){
			answer_cassets[7-i].style.display = 'none'
			// console.log(i)
			
		}
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
			//
			answer_cassets[i].style.display = 'block'
			
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
			//
			answer_cassets[i].style.display = 'block'

			
		}
		atm_properties.getting_amount = 0;
		getting_amount.value = "0"
	})

	//algoritm of this task 

	function givingMoney(money, coins) {
		let value1 =[],
			count1 = [],
			value = [],
			count = [],
			needCoins1 = [],
			needCoins2 = []
	
		
		function sorting(arr) {
			arr.sort((a, b) => a.val < b.val ? 1 : -1);
		}
		sorting(coins)
		for (let i = 0; i < coins.length; i++){
			value1[i] = coins[i].val
			count1[i] = coins[i].count
		}
		console.log(value1)
		console.log(count1)
	
		for (let i=0; i<coins.length; i++){
			if (value1[i] != 0){
				let check = value1[i]
				count[i] = 0
				console.log(check)
				value[i] = value1[i]
				while (value1.indexOf(check,0) != -1 ){
					console.log(i)
					console.log(count1[value1.indexOf(check,i+1)])
					count[i] = count[i] + count1[value1.indexOf(check,i)]
					console.log(count[i])
					console.log(value1)
	
					// console.log(count1[i] + count1[value1.indexOf(check,0)])
					  
				// if (value1[i] != 0){
				//     value[i] = value1[i]
	
				// }
					value1[value1.indexOf(check,0)]=0
				}
			}
			
			
		}
		for (let i=0; i < count.length;i++){
			if (count[i] == undefined){
				count[i] = 0
			}
			if (value[i] == undefined){
				value[i] = 0
			}
		}
		console.log(value)
		// console.log(value[1])
		console.log(count)
	
		let sum1 = money,
			sum2 = money,
			sum3 = money,
			sum4 = money,
			sum5 = money,
			sum6 = money
		if (value.indexOf(5000,0) != -1 && value.indexOf(2000,0) != -1 && money > 5000) {
			let max5 = Math.floor(sum1/5000)
			if (max5 <= count[0]) {
				needCoins1[0] = Math.floor(sum1/5000)
	
				sum1 = sum1 - Math.floor(sum1/5000)*5000
			} else {
				needCoins1[0] = count[0]
	
				sum1 = sum1 - count[0]*5000
			}
			for (let i = 1; i < value.length;i++){
				if (value[i] == 500 && value.indexOf(200,0) != -1 && sum1 > 500) {
					
					sum3 = sum1
					let needCoins3 = []
					for (let j = 0; j < needCoins1.length; j++ ){
						needCoins3[j] = needCoins1[j]
					}                
					if (Math.floor(sum3/value[i]) <= count[i] && value[i] != 0){
						needCoins3[i] = Math.floor(sum3/value[i])
	
						sum3 = sum3 - Math.floor(sum3/value[i])*value[i]
					} else if (Math.floor(sum3/value[i]) > count[i] && value[i] != 0){
						needCoins3[i] = count[i]
	
						sum3 = sum3 - count[i]*value[i]
	
					}
					
					for (let j = i; j < value.length; j++){
						if (Math.floor(sum3/value[j]) <= count[j] && value[j] != 0) {
							needCoins3[i] = Math.floor(sum3/value[i])
	
							sum3 = sum3 - Math.floor(sum3/value[j])*value[j]
	
						} else if (Math.floor(sum3/value[j]) > count[j] && value[j] != 0){
							needCoins3[i] = Math.floor(sum3/value[i])
	
							sum3 = sum3 - count[j]*value[j]
							
						}
					}
	
					sum4 = sum1
					let needCoins4 = []
					for (let j = 0; j < needCoins1.length; j++ ){
						needCoins4[j] = needCoins1[j]
					} 
	
					
					if (Math.floor(sum4/value[i]) <= count[i] && value[i] != 0){
						needCoins4[i] = Math.floor(sum4/value[i])-1
	
						sum4 = sum4 - (Math.floor(sum4/value[i])-1)*value[i]
	
					} else if (Math.floor(sum4/value[i]) > count[i] && value[i] != 0){
						needCoins4[i] = count[i] -1
	
						sum4 = sum4 - (count[i]-1)*value[i]
	
					}
					
					for (let j = i; j < value.length; j++){
						if (Math.floor(sum4/value[j]) <= count[j] && value[j] != 0) {
							needCoins4[j] = Math.floor(sum4/value[j])
	
							sum4 = sum4 - Math.floor(sum4/value[j])*value[j]
	
						} else if (Math.floor(sum4/value[j]) > count[j] && value[j] != 0){
							needCoins4[j] = count[j]
	
							sum4 = sum4 - count[j]*value[j]
	
						}
					}
				
				} else {
					if (Math.floor(sum1/value[i]) >= count[i] && count[i] != 0) {
						console.log(sum1)
						needCoins1[i] = count[i]
	
						sum1 = sum1 - count[i]*value[i]

	
					} else if (Math.floor(sum1/value[i]) < count[i] && count[i] != 0){
						needCoins1[i] = Math.floor(sum1/value[i])
						console.log('i ' + i)
						console.log('needCoins1 ' + needCoins1)
						console.log('sum1 after '+sum1)

						sum1 = sum1 - Math.floor(sum1/value[i])*value[i]
						console.log('sum1 before '+ sum1)
					}
				}       
	
			}
	
	
			if (max5 <= count[0]) {
				needCoins2[0] = Math.floor(sum2/5000)-1
	
				sum2 = sum2 - (Math.floor(sum2/5000)-1)*5000
			} else {
				needCoins2[0] = count[0] -1 
	
				sum2 = sum2 - (count[0]-1)*5000
			}
			for (let i = 1; i < value.length;i++){
	
				if (value[i] == 500 && value.indexOf(200,0) != -1 && sum2 >= 500) {
					
					sum5 = sum2
					let needCoins5 = []
					for (let j = 0; j < needCoins2.length; j++ ){
						needCoins5[j] = needCoins2[j]
					}    
					
					if (Math.floor(sum5/value[i]) <= count[i] && count[i] != 0){
						needCoins5[i] = Math.floor(sum/value[i])
	
						sum5 = sum5 - Math.floor(sum5/value[i])*value[i]
					} else if (Math.floor(sum5/value[i]) > count[i] && count[i] != 0){
						needCoins5[i] = count[i]
	
						sum5 = sum5 - count[i]*value[i]
	
					}
					
					for (let j = i; j < value.length; j++){
						if (Math.floor(sum5/value[j]) <= count[j] && value[j] != 0) {
							needCoins5[j] = Math.floor(sum5/value[j])
	
							sum5 = sum5 - Math.floor(sum5/value[j])*value[j]
						} else if (Math.floor(sum5/value[j]) > count[j] && value[j] != 0){
							needCoins5[j] = count[j]
	
							sum5 = sum5 - count[j]*value[j]
						}
					}
	
					sum6 = sum2
					let needCoins6 = []
					for (let j = 0; j < needCoins2.length; j++ ){
						needCoins6[j] = needCoins2[j]
					}    
						
					
					if (Math.floor(sum6/value[i]) <= count[i] && value[i] != 0){
						needCoins6[i] = Math.floor(sum6/value[i])-1
	
						sum6 = sum6 - (Math.floor(sum6/value[i])-1)*value[i]
	
					} else if (Math.floor(sum6/value[i]) > count[i] && value[i] != 0){
						needCoins6[i] = count[i]-1 
	
						sum6 = sum6 - (count[i]-1)*value[i]
					}
					
					for (let j = i; j < value.length; j++){
						if (Math.floor(sum6/value[j]) <= count[j] && value[j] != 0) {
							needCoins6[j] = Math.floor(sum6/value[j])
	
							sum6 = sum6 - Math.floor(sum6/value[j])*value[j]
						} else if (Math.floor(sum6/value[j]) > count[j] && value[j] != 0){
							needCoins6[j] = count[j]
	
							sum6 = sum6 - count[j]*value[j]
						}
					}
				
				} else {
					if (Math.floor(sum2/value[i]) >= count[i] && value[i] != 0) {
						needCoins2[i] = count[i]
						console.log('1')
	
						sum2 = sum2 - count[i]*value[i]
					} else if (Math.floor(sum2/value[i]) < count[i] && value[i] != 0){
						needCoins2[i] = Math.floor(sum2/value[i])
						console.log('1')

	
						sum2 = sum2 - Math.floor(sum2/value[i])*value[i]
					}
				}       
	
			}
		
		} else {
			for (let i = 0; i < value.length;i++){
				if (value[i] == 500 && value.indexOf(200,0) != -1 && sum1 > 500) {
					console.log(']eq')
					sum3 = sum1
					console.log('sum3 '+sum3)
					let needCoins3 = []
					for (let j = 0; j < needCoins1.length; j++ ){
						needCoins3[j] = needCoins1[j]
					}                
					if (Math.floor(sum3/value[i]) <= count[i] && value[i] != 0){
						needCoins3[i] = Math.floor(sum3/value[i])
	
						sum3 = sum3 - Math.floor(sum3/value[i])*value[i]
					} else if (Math.floor(sum3/value[i]) > count[i] && value[i] != 0){
	
						needCoins3[i] = count[i]
						sum3 = sum3 - count[i]*value[i]
	
					}
					
					for (let j = i; j < value.length; j++){
						if (Math.floor(sum3/value[j]) <= count[j] && value[j] !=0) {
							needCoins3[i] = Math.floor(sum3/value[i])
	
							sum3 = sum3 - Math.floor(sum3/value[j])*value[j]
	
						} else if (Math.floor(sum3/value[j]) > count[j] && value[j] !=0){
							needCoins3[i] = Math.floor(sum3/value[i])
	
							sum3 = sum3 - count[j]*value[j]
							
						}
					}
	
					sum4 = sum1
					let needCoins4 = []
					for (let j = 0; j < needCoins1.length; j++ ){
						needCoins4[j] = needCoins1[j]
					} 
	
					
					if (Math.floor(sum4/value[i]) <= count[i] && value[i] != 0){
						needCoins4[i] = Math.floor(sum4/value[i])-1
	 
						sum4 = sum4 - (Math.floor(sum4/value[i])-1)*value[i]
	
					} else if (Math.floor(sum4/value[i]) <= count[i] && count[i] != 0) {
						needCoins4[i] = count[i] -1
	
						sum4 = sum4 - (count[i]-1)*value[i]
	
					}
					
					for (let j = i; j < value.length; j++){
						if (Math.floor(sum4/value[j]) <= count[j] && count[i] != 0) {
							needCoins4[j] = Math.floor(sum4/value[j])
	
							sum4 = sum4 - Math.floor(sum4/value[j])*value[j]
	
						} else if (Math.floor(sum4/value[j]) > count[j] && count[i] != 0) {
							needCoins4[j] = count[j]
	
							sum4 = sum4 - count[j]*value[j]
	
						}
					}
				
				} else {
	
					if (Math.floor(sum1/value[i]) >= count[i] && count[i] != 0) {
						needCoins1[i] = count[i]
						
						sum1 = sum1 - count[i]*value[i]
						console.log(sum1)
							console.log('i ' + i)
		
						console.log(needCoins1[i])
					} else if (Math.floor(sum1/value[i]) < count[i] && count[i] != 0){
						needCoins1[i] = Math.floor(sum1/value[i])
						console.log('1')

	
						sum1 = sum1 - Math.floor(sum1/value[i])*value[i]
						console.log('sum '+sum1)
						console.log('i '+i)
						console.log('need '+needCoins1[i])
	
					}

				}       
				console.log(needCoins1)

	
			}
	
	
		}
		console.log(needCoins1)
		let answer = []
		if (sum1 == 0) {
			for (let i =0; i < needCoins1.length; i++){
				answer[i] = {value:0,count:0}
			}
			
			for (let i =0; i < needCoins1.length; i++){
				console.log('i'+i)
				console.log(needCoins1[i])
				answer[i].value = value[i]
				answer[i].count = needCoins1[i] 
				
			}
			return answer
		} else if (sum2 == 0){
			for (let i =0; i < needCoins2.length; i++){
				answer[i] = {value:0,count:0}
			}
			for (let i =0; i < needCoins2.length; i++){
				answer[i].value = value[i]
				answer[i].count = needCoins2[i] 
				
			}
			return answer
		} else if (sum3 == 0){
			console.log('sum3 '+sum3)
			for (let i =0; i < needCoins3.length; i++){
				answer[i] = {value:0,count:0}
			}
			for (let i =0; i < needCoins3.length; i++){
				answer[i].value = value[i]
				answer[i].count = needCoins3[i] 
				
			}
			return answer
		} else if (sum4 == 0){
			for (let i =0; i < needCoins4.length; i++){
				answer[i] = {value:0,count:0}
			}
			for (let i =0; i < needCoins4.length; i++){
				answer[i].value = value[i]
				answer[i].count = needCoins4[i] 
				
			}
			return answer
		} else if (sum5 == 0){
			for (let i =0; i < needCoins5.length; i++){
				answer[i] = {value:0,count:0}
			}
			for (let i =0; i < needCoins5.length; i++){
				answer[i].value = value[i]
				answer[i].count = needCoins5[i] 
				
			}
			return answer
		} else if (sum6 == 0){
			for (let i =0; i < needCoins6.length; i++){
				answer[i] = {value:0,count:0}
			}
			for (let i =0; i < needCoins6.length; i++){
				answer[i].value = value[i]
				answer[i].count = needCoins6[i] 
				
			}
			return answer
			
		} else {
			return answer
		}
			
	
	}


	
});