 //Bài tập 3: Tính thuế thu nhập
 /*
 input: thu nhập, số người
 output: tiền thuế
 process:
    1. tính thu nhập chịu thuế = thu nhập - 4 -số người * 1.6;
    2. if thu nhập chịu thuế <= 60tr =>thuế = thu nhập chịu thuế * 5%
    3. if thu nhập chịu thuế >60tr <=120 => *10%;
    4. ...
 */
    function calcTax(income){
        var income = 150;
        var tax = 0;
        var nonPerson = 4;
        var taxIncome = income - 4 - (nonPerson*1.6);
        if(taxIncome <= 60){
            tax = taxIncome * 0.05;
        }else if(taxIncome > 60 && taxIncome <= 120){
            tax = taxIncome * 0.1;
        }else if(taxIncome >120 && taxIncome<=210){
            tax = taxIncome * 0.15;
        }else if(taxIncome >210 && taxIncome <=384){
            tax = taxIncome * 0.2;
        }else if(taxIncome >384 && taxIncome <=624){
            tax = taxIncome * 0.25;
        }else if(taxIncome >624 && taxIncome <=960){
            tax = taxIncome * 0.3;
        }else{
            tax = taxIncome * 0.35;
        }
        console.log('Tiền thuế là', tax)
    }
    calcTax();
    
    
    //Bài tập 4: Tính tiền cáp
    /*
    input: hộ dân, doanh nghiệp, số kết nối, số kênh
    output: giá tiền
    process: 
        1. Đặt biến isPersonal để check xem là hộ dân hay doanh nghiệp
        2. If hộ dân => giá tiền = (4.5 + 20.5 + (7.5 * số kênh))
        3. If doanh nghiệp => 
        3a. nếu số kết nối <= 10 => giá tiền = (15 + (50 * số kênh) +  (số kết nối * 75))
                             
        3b. nếu số kết nối > 10 => giá tiền = (15 + (50 * số kênh) (10 * 75 + (số kết nối - 10)*5))
    */
    
    
    
    function calcInternetFee(){
        var result = 0;
        var isPersonal = false;
        var numberChannel = 100;
        var numberLinks = 20;
        
        
        if (isPersonal === false){
            if(numberLinks <= 10){
                result = (15 + (50 * numberChannel) + (numberLinks * 75));
            }else{
                result = (15 + (50 * numberChannel) + (10 * 75 + (numberLinks - 10)*5));
            }
        }else{
            result = 4.5 + 20.5 + (7.5*numberChannel);
        }
        console.log('Số tiền là :',result);
    }
    calcInternetFee();