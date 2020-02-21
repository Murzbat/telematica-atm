window.addEventListener('DOMContentLoaded', function(){
    //Calc
    let casset_number = document.getElementsByClassName('casset_number'),
        bank_calc = document.getElementsByClassName('bank_calc')[0],
        bank_calc_close = document.getElementsByClassName('bank_calc_close')[0],
        cassets_icons_wraper = document.getElementsByClassName('cassets_icons_wraper')[0],
        show_casset_number = document.getElementById('show_casset_number'),
        next_btn = document.getElementsByClassName('button')[0],
		bank_calc_2 = document.getElementsByClassName('bank_calc_2')[0],
		bank_calc_2_close = bank_calc_2.getElementsByClassName('bank_calc_close')[0], 
		exist_cassets = bank_calc_2.getElementsByTagName('a'),
		exist_value_for_cassets = bank_calc_2.getElementsByTagName('select'),
        atm_properties = {
            casset_number: 0,

        }
    console.log(casset_number)
    console.log(cassets_icons_wraper);
	console.log(exist_cassets);
	console.log(next_btn);
	// exist_cassets[0].remove()
	// bank_calc.style.display = 'none';
	
    
    cassets_icons_wraper.addEventListener('click',function(){
        // console.log(event.target)
        for (let i=0; i < casset_number.length;i++) {
            if (event.target == casset_number[i]) {
                console.log(i+1);
                atm_properties.casset_number = i+1
            
            }
            // console.log(atm_properties)
            // show_casset_number.innerHTML = i+1
        }
        
        show_casset_number.innerHTML = atm_properties.casset_number
    })
	
	bank_calc_close.addEventListener('click', function(){
		bank_calc.style.display = 'none';

    })

    //going to the 2nd modal page
	
	next_btn.addEventListener('click',function(){
        if (atm_properties.casset_number == 0) {
            show_casset_number.innerHTML = 'Количество не может быть 0'
        } else {
			bank_calc.style.display = 'none';
			
            
			bank_calc_2.style.display = 'block';
			for (let i=0; i < 8 - atm_properties.casset_number; i++){
				console.log(atm_properties.casset_number+i)
				console.log(atm_properties.casset_number)
				console.log(exist_cassets[7-i])
				exist_cassets[7-i].remove()
				exist_value_for_cassets[7-i].remove()
			}
            
        }
        
	})
	bank_calc_2_close.addEventListener('click', function(){
		bank_calc_2.style.display = 'none';

    })
	

	// 	calc_btn = [],
	// 	calc = document.getElementsByClassName('popup_calc')[0],
	// 	calc_close = document.getElementsByClassName('popup_calc_close')[0],
	// 	balcon_icons = document.getElementsByClassName('balcon_icons')[0],
	// 	icons = balcon_icons.getElementsByTagName('a'),
	// 	big_img = document.getElementsByClassName('big_img')[0],
	// 	big_icons = big_img.getElementsByTagName('img'),
	// 	input_calc1 = calc.getElementsByClassName('form-control')
	// 	icons_img = [],
	// 	next_btn = calc.getElementsByClassName('button')[0],


	// 	calc_profile = document.getElementsByClassName('popup_calc_profile')[0],
	// 	profile_calc_close = document.getElementsByClassName('popup_calc_profile_close')[0],
	// 	checkbox_profile = calc_profile.getElementsByClassName('checkbox-custom'),
	// 	checkbox_label = calc_profile.getElementsByTagName('label'),
	// 	calc_profile_types = calc_profile.getElementsByTagName('options'),
	// 	select_profile = calc_profile.getElementsByTagName('select')[0],
	// 	next_btn_profile = calc_profile.getElementsByClassName('button')[0],
	// 	calc_end = document.getElementsByClassName('popup_calc_end')[0],
	// 	calc_options = {
	// 		name,
	// 		telephone: '',
	// 		balconType: "type1",
	// 		width,
	// 		height,
	// 		checkbox: " ",
	// 		select_profile: "tree"
	// 	};
	// console.log(next_btn_profile);


	// for (let i = 0; i < icons.length; i++){
		
	// 	icons_img[i] = icons[i].getElementsByTagName('img')[0];
	
	// }

	// for (let i = 0; i < glazing_price.length; i++){
		
	// 	calc_btn[i] = glazing_price[i].getElementsByTagName('button')[0];
	// }
	

	// for (let i = 0; i < glazing_price.length; i++) {
	// 	calc_btn[i].addEventListener('click', function(){
			
	// 		calc.style.display = 'block';

	// 	});
	// }

	// calc_close.addEventListener('click', function(){
		
	// 	calc.style.display = 'none';
	// 	ShowBalconType(0);
	// 	for (let j = 0; j < icons.length; j++){
	// 		icons_img[j].style.width = '20' + '%';
	// 	}
	// 	icons_img[0].style.width = '30' + '%';
	// 	select_profile.value = 'tree';
	// 	calc_end.style.display = 'none';
	// 	calc_options.name = '';
	// 	calc_options.telephone = '';
	// 	calc_options.balconType = "type1";
	// 	calc_options.width = "";
	// 	calc_options.height = "";
	// 	calc_options.checkbox = "";
	// 	calc_options.select_profile = "tree";
	// 	input_calc_end[1].value = '';
	// 	input_calc_end[0].value = '';
	// 	input_calc1[1].value = '';
	// 	input_calc1[0].value = '';





	
	// });
});