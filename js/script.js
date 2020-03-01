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
			needCoins

		// for (let i=0; i< atm_properties.casset_number;i++){
		// 	coins[i] = {val:atm_properties.casset_values[i], count: atm_properties.casset_amount[i]*atm_properties.casset_condition[i]}
			
		// }

		answer_summ.innerHTML = atm_properties.getting_amount
		console.log(coins)
		console.log(atm_properties.getting_amount)
		
		coins = [ 
			{ val: 5000, count: 10 }, 
			{ val: 500, count: 10 },
			{ val: 100, count: 10 }
		];
		console.log(coins)

		
		needCoins = givingMoney(atm_properties.getting_amount,coins)
		console.log(needCoins)
		if (needCoins.length == 0) {
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
		let needCoins = [], 
			minCoins = []; 
		minCoins[0] = 0;
		inf = Number.MAX_VALUE;
		for (let sum = 100; sum <= money; sum++) {     
			minCoins[sum] = inf
			for (let i = 0; i < coins.length; i++) {
				if (sum >= coins[i].val && minCoins[sum] > minCoins[sum - coins[i].val] + 1) {
					minCoins[sum] = minCoins[sum - coins[i].val] + 1;
				}
			}
		}
		
		if (minCoins[money] == inf) { 
			return []; 
		}
	 
		let sum = money;
		while (sum > 0) {
			let curSum = sum;
			console.log('curSum '+curSum)
			for (let i = 0; i < coins.length; i++) {
				console.log('i '+i)
				console.log('coin '+coins[i].val)
				console.log(minCoins[sum-coins[i].val])
				console.log(minCoins[sum]-1)
				console.log(sum)
				console.log('coinscount after '+coins[i].count)         
				console.log(sum/coins[i].val)      
	
	
			   if (minCoins[sum-coins[i].val] == minCoins[sum]-1 && coins[i].count != 0){
				// if (isCoinExist && sum >= coins[coin].val && (minCoins[sum] == minCoins[sum - coins[coin].val] + 1 || minCoins[sum] == minCoins[sum - coins[coin].val])) {                                  
				//     if (!needCoins[coin]) {
				//         needCoins[coin] = 0;
				//     }
				//     ++needCoins[coin];  
				//     console.log(needCoins)
				//     console.log(curSum)
				//     console.log(sum)
				if (!needCoins[i]) {
					needCoins[i] = 0;
				   
	
				}
					sum -= coins[i].val;
					console.log(sum)
					
					coins[i].count -= 1;
					++needCoins[i]
					console.log('needCoins '+needCoins[i])
					console.log('coinscount'+coins[i].count)               
					break;
				// }
			   } else if (minCoins[sum-coins[i].val] != minCoins[sum]-1 && sum/coins[i].val <= coins[i].count && coins[i].count != 0 ){
				if (!needCoins[i]) {
					needCoins[i] = 0;
					
	
				}    
				sum -= coins[i].val;
					console.log(sum)
					
					coins[i].count -= 1;
					++needCoins[i]
					console.log('coinscount2'+coins[i].count)               
					break;
			   }
			}
		
	
			if (curSum === sum) {
				needCoins = [];
				break; // не хватает купюр
			}
		}
		return needCoins;
	}


	
});