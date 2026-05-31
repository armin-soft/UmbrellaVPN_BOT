/*CMD
  command: تاریخ و زمان
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

function Convert_English_Number_To_Farsi(English_Number) {
const Farsi_Numbers_Array = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
return English_Number.toString().split('').map(Digit => Farsi_Numbers_Array[Digit] || Digit).join('');
}

function Convert_Gregorian_To_Jalali(Year_Gregorian, Month_Gregorian, Day_Gregorian) {
const Days_In_Gregorian_Month = [0,31,59,90,120,151,181,212,243,273,304,334];
let Year_Jalali;

if (Year_Gregorian > 1600) {
Year_Jalali = 979;
Year_Gregorian -= 1600;
}

else {
Year_Jalali = 0;
Year_Gregorian -= 621;
}

const Adjusted_Year_Gregorian = (Month_Gregorian > 2) ? (Year_Gregorian + 1) : Year_Gregorian;
let Total_Days = 365*Year_Gregorian + parseInt((Adjusted_Year_Gregorian + 3)/4) - parseInt((Adjusted_Year_Gregorian + 99)/100) + parseInt((Adjusted_Year_Gregorian + 399)/400) - 80 + Day_Gregorian + Days_In_Gregorian_Month[Month_Gregorian-1];
Year_Jalali += 33 * parseInt(Total_Days / 12053);
Total_Days %= 12053;
Year_Jalali += 4 * parseInt(Total_Days / 1461);
Total_Days %= 1461;
Year_Jalali += parseInt(Total_Days / 365);
Total_Days %= 365;
let Month_Jalali, Day_Jalali;

if (Total_Days < 186) {
Month_Jalali = 1 + parseInt(Total_Days / 31);
Day_Jalali = 1 + Total_Days % 31;
}

else {
Month_Jalali = 7 + parseInt((Total_Days - 186) / 30);
Day_Jalali = 1 + (Total_Days - 186) % 30;
}

return [Year_Jalali, Month_Jalali, Day_Jalali];
}

const Week_Days_In_Farsi = ['یکشنبه','دوشنبه','سه ‌شنبه','چهارشنبه','پنج‌ شنبه','جمعه','شنبه'];
const Months_In_Farsi = ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'];
const Current_Date_Time_UTC = new Date();
const Current_Date_Time_In_Milliseconds_UTC = Current_Date_Time_UTC.getTime() + (Current_Date_Time_UTC.getTimezoneOffset() * 60000);
const Iran_Time_Offset_In_Milliseconds = 3.5 * 60 * 60000;
const Current_Date_Time_In_Iran = new Date(Current_Date_Time_In_Milliseconds_UTC + Iran_Time_Offset_In_Milliseconds);
const Current_Year_Gregorian = Current_Date_Time_In_Iran.getFullYear();
const Current_Month_Gregorian = Current_Date_Time_In_Iran.getMonth() + 1;
const Current_Day_Gregorian = Current_Date_Time_In_Iran.getDate();
const Jalali_Date_Array = Convert_Gregorian_To_Jalali(Current_Year_Gregorian, Current_Month_Gregorian, Current_Day_Gregorian);
const Current_Year_Jalali = Jalali_Date_Array[0];
const Current_Month_Jalali = Jalali_Date_Array[1];
const Current_Day_Jalali = Jalali_Date_Array[2];
const Current_Day_Of_Week_Farsi = Week_Days_In_Farsi[Current_Date_Time_In_Iran.getDay()];
const Current_Month_Name_Farsi = Months_In_Farsi[Current_Month_Jalali - 1];
const Full_Date_Shamsi = Current_Day_Of_Week_Farsi + " " + Convert_English_Number_To_Farsi(Current_Day_Jalali) + " " + Current_Month_Name_Farsi + " " + Convert_English_Number_To_Farsi(Current_Year_Jalali);
const Current_Hour_In_Iran = Current_Date_Time_In_Iran.getHours();
const Current_Minute_In_Iran = Current_Date_Time_In_Iran.getMinutes();
const Current_Second_In_Iran = Current_Date_Time_In_Iran.getSeconds();
let Display_Hour_In_12_Format = Current_Hour_In_Iran % 12;

if (Display_Hour_In_12_Format === 0) Display_Hour_In_12_Format = 12;
const Full_Time_Shamsi = Convert_English_Number_To_Farsi(Display_Hour_In_12_Format) + ":" + Convert_English_Number_To_Farsi(Current_Minute_In_Iran) + ":" + Convert_English_Number_To_Farsi(Current_Second_In_Iran);

let Time_Period_Current = {};
if (Current_Hour_In_Iran >= 0 && Current_Hour_In_Iran < 3) Time_Period_Current = {Name:'نیمه شب', Emoji:'🌌'};
else if (Current_Hour_In_Iran >= 3 && Current_Hour_In_Iran < 5) Time_Period_Current = {Name:'پیش سحر', Emoji:'🌃'};
else if (Current_Hour_In_Iran >= 5 && Current_Hour_In_Iran < 6) Time_Period_Current = {Name:'سحر', Emoji:'🕌'};
else if (Current_Hour_In_Iran >= 6 && Current_Hour_In_Iran < 7) Time_Period_Current = {Name:'طلوع آفتاب', Emoji:'🌅'};
else if (Current_Hour_In_Iran >= 7 && Current_Hour_In_Iran < 9) Time_Period_Current = {Name:'صبح', Emoji:'🌄'};
else if (Current_Hour_In_Iran >= 9 && Current_Hour_In_Iran < 12) Time_Period_Current = {Name:'پیش از ظهر', Emoji:'🌞'};
else if (Current_Hour_In_Iran >= 12 && Current_Hour_In_Iran < 13) Time_Period_Current = {Name:'ظهر', Emoji:'☀️'};
else if (Current_Hour_In_Iran >= 13 && Current_Hour_In_Iran < 15) Time_Period_Current = {Name:'بعد از ظهر', Emoji:'🌤'};
else if (Current_Hour_In_Iran >= 15 && Current_Hour_In_Iran < 17) Time_Period_Current = {Name:'عصر', Emoji:'🌇'};
else if (Current_Hour_In_Iran >= 17 && Current_Hour_In_Iran < 19) Time_Period_Current = {Name:'غروب', Emoji:'🌆'};
else if (Current_Hour_In_Iran >= 19 && Current_Hour_In_Iran < 20) Time_Period_Current = {Name:'اوایل شب', Emoji:'🌉'};
else if (Current_Hour_In_Iran >= 20 && Current_Hour_In_Iran < 22) Time_Period_Current = {Name:'شب', Emoji:'🌃'};
else Time_Period_Current = {Name:'انتهای شب', Emoji:'🌙'};

let Season_Current = {};
if (Current_Month_Jalali >= 1 && Current_Month_Jalali <= 3) Season_Current = {Name:'بهار', Emoji:'🌸'};
else if (Current_Month_Jalali >= 4 && Current_Month_Jalali <= 6) Season_Current = {Name:'تابستان', Emoji:'☀️'};
else if (Current_Month_Jalali >= 7 && Current_Month_Jalali <= 9) Season_Current = {Name:'پاییز', Emoji:'🍂'};
else Season_Current = {Name:'زمستان', Emoji:'⛄️'};

Bot.setProperty("Date_Time","📆تاریخ:" + Full_Date_Shamsi +" | 🌎فصل:" + Season_Current.Emoji + " " + Season_Current.Name +"\n🕰زمان:" + Full_Time_Shamsi + " " + Time_Period_Current.Emoji + " " + Time_Period_Current.Name + "");