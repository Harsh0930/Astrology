export const INDIA_REGIONS = [
  { state: "Andhra Pradesh", cities: ["Visakhapatnam", "Vijayawada", "Tirupati", "Guntur", "Nellore"] },
  { state: "Arunachal Pradesh", cities: ["Itanagar", "Naharlagun", "Tawang", "Pasighat"] },
  { state: "Assam", cities: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat"] },
  { state: "Bihar", cities: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur"] },
  { state: "Chhattisgarh", cities: ["Raipur", "Bilaspur", "Durg", "Bhilai"] },
  { state: "Goa", cities: ["Panaji", "Margao", "Vasco da Gama", "Mapusa"] },
  { state: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"] },
  { state: "Haryana", cities: ["Gurugram", "Faridabad", "Panchkula", "Hisar", "Karnal"] },
  { state: "Himachal Pradesh", cities: ["Shimla", "Dharamshala", "Mandi", "Solan"] },
  { state: "Jharkhand", cities: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"] },
  { state: "Karnataka", cities: ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"] },
  { state: "Kerala", cities: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur"] },
  { state: "Madhya Pradesh", cities: ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain"] },
  { state: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"] },
  { state: "Manipur", cities: ["Imphal", "Thoubal", "Bishnupur", "Churachandpur"] },
  { state: "Meghalaya", cities: ["Shillong", "Tura", "Jowai", "Nongpoh"] },
  { state: "Mizoram", cities: ["Aizawl", "Lunglei", "Champhai", "Kolasib"] },
  { state: "Nagaland", cities: ["Kohima", "Dimapur", "Mokokchung", "Wokha"] },
  { state: "Odisha", cities: ["Bhubaneswar", "Cuttack", "Rourkela", "Puri", "Sambalpur"] },
  { state: "Punjab", cities: ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Mohali"] },
  { state: "Rajasthan", cities: ["Jaipur", "Udaipur", "Jodhpur", "Kota", "Ajmer"] },
  { state: "Sikkim", cities: ["Gangtok", "Namchi", "Geyzing", "Mangan"] },
  { state: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"] },
  { state: "Telangana", cities: ["Hyderabad", "Warangal", "Karimnagar", "Nizamabad"] },
  { state: "Tripura", cities: ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar"] },
  { state: "Uttar Pradesh", cities: ["Lucknow", "Noida", "Ghaziabad", "Kanpur", "Varanasi", "Prayagraj"] },
  { state: "Uttarakhand", cities: ["Dehradun", "Haridwar", "Haldwani", "Rudrapur", "Sitarganj", "Nainital"] },
  { state: "West Bengal", cities: ["Kolkata", "Durgapur", "Siliguri", "Howrah", "Asansol"] },
  { state: "Andaman and Nicobar Islands", cities: ["Port Blair", "Havelock Island", "Diglipur"] },
  { state: "Chandigarh", cities: ["Chandigarh"] },
  { state: "Dadra and Nagar Haveli and Daman and Diu", cities: ["Daman", "Diu", "Silvassa"] },
  { state: "Delhi", cities: ["New Delhi", "Dwarka", "Rohini", "Saket", "Karol Bagh"] },
  { state: "Jammu and Kashmir", cities: ["Srinagar", "Jammu", "Anantnag", "Baramulla"] },
  { state: "Ladakh", cities: ["Leh", "Kargil", "Diskit"] },
  { state: "Lakshadweep", cities: ["Kavaratti", "Agatti", "Minicoy"] },
  { state: "Puducherry", cities: ["Puducherry", "Karaikal", "Mahe", "Yanam"] },
];

export const INDIA_STATES = INDIA_REGIONS.map((item) => item.state);

export function getCitiesForState(state) {
  return INDIA_REGIONS.find((item) => item.state === state)?.cities ?? [];
}
