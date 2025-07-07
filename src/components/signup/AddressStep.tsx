import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from "lucide-react";

interface AddressStepProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

const AddressStep = ({ formData, updateFormData }: AddressStepProps) => {
  const provinceData = {
    "Bagmati Province": [
      "Banepa", "Bhaktapur", "Bharatpur", "Bhimeshwor - Charikot", "Bidur", "Hetauda", "Kalika",
      "Kathmandu Metro 10 - New Baneshwor Area", "Kathmandu Metro 11 - Maitighar Area", "Kathmandu Metro 12 - Teku Area",
      "Kathmandu Metro 13 - Kalimati Area", "Kathmandu Metro 14 - Kuleshwor Area", "Kathmandu Metro 15 - Swayambhu Area",
      "Kathmandu Metro 16 - Nayabazar Area", "Kathmandu Metro 17 - Chhetrapati Area", "Kathmandu Metro 18 - Raktakali Area",
      "Kathmandu Metro 19 - Hanumandhoka Area", "Kathmandu Metro 1 - Naxal Area", "Kathmandu Metro 20 - Marutol Area",
      "Kathmandu Metro 21 - Lagantole Area", "Kathmandu Metro 22 - Newroad Area", "Kathmandu Metro 23 - Basantapur Area",
      "Kathmandu Metro 24 - Indrachowk Area", "Kathmandu Metro 25 - Ason Area", "Kathmandu Metro 26 - Samakhusi Area",
      "Kathmandu Metro 26 - Thamel Area", "Kathmandu Metro 27 - Bhotahiti Area", "Kathmandu Metro 28 - Bagbazar Area",
      "Kathmandu Metro 28 - Kamaladi Area", "Kathmandu Metro 29 - Anamnagar Area", "Kathmandu Metro 29 - Putalisadak Area",
      "Kathmandu Metro 2 - Lazimpat Area", "Kathmandu Metro 30 - Maitidevi Area", "Kathmandu Metro 31 - Min Bhawan Area",
      "Kathmandu Metro 32 - Koteshwor Area", "Kathmandu Metro 32 - Tinkune Area", "Kathmandu Metro 3 - Baluwatar Area",
      "Kathmandu Metro 3 - Maharajgunj Area", "Kathmandu Metro 4 - Bishalnagar Area", "Kathmandu Metro 5 - Tangal Area",
      "Kathmandu Metro 7 - Chabahil Area", "Kathmandu Metro 8 - Gaushala Area", "Kathmandu Metro 9 - Sinamangal Area",
      "Kathmandu Outside Ring Road", "Khairehani", "Lalitpur Inside Ring Road", "Lalitpur Outside Ring Road",
      "Nilkantha - Dhading", "Panauti", "Panchkhal", "Rapti", "Ratnanagar", "Sindhuli-Kamalamai"
    ],
    "Gandaki Province": [
      "Baglung Bazaar", "Beni", "Bhimad", "Damauli", "Devchuli", "Gaindakot", "Gorkha Bazaar",
      "Kawasoti", "Kushma", "Lekhnath", "Pokhara", "Putalibazar", "Shuklagandaki", "Sundarbazar", "Waling"
    ],
    "Karnali Province": [
      "Bheriganga", "Birendranagar - Surkhet", "Lekbeshi"
    ],
    "Koshi Province": [
      "Arjundhara", "Belbari", "Bhadrapur", "Biratnagar", "Birtamod", "Chandragadi", "Damak", "Dhankuta",
      "Dharan", "Duhabi", "Gauradaha", "Ilam", "Inaruwa", "Itahari", "Kakarbhitta", "Kankai",
      "Letang Bhogateni", "Pathari-Shanischare", "Rangeli", "Ratuwamai", "Shivasatakshi", "Sunawarshi",
      "Sundar Haraincha", "Triyuga", "Urlabari"
    ],
    "Lumbini Province": [
      "Banganga", "Bardaghat", "Butwal", "Dang - Ghorahi", "Dang - Tulsipur", "Devdaha", "Kohalpur",
      "Lamahi", "Lumbini Sanskriti", "Nepalgunj", "Ramgram", "Sainamaina", "Shivaraj - Chanauta",
      "Sidarthanagar - Bhairahawa", "Sunwal", "Tansen", "Taulihawa - Kapilvastu", "Tilotama"
    ],
    "Madhesh Province": [
      "Bardibas", "Birgunj", "Chandrapur", "Chhireswarnath", "Dhanushadham", "Golbazar", "Hansapur",
      "Hariwan", "Jaleswor", "Janakpur", "Jeetpur - Simara", "Kalaiya", "Lahan", "Lalbandi",
      "Malangwa", "Mirchaiya", "Mithila", "Mithila Bihari", "Nagarain", "Rajbiraj", "Sabaila", "Shahidnagar"
    ],
    "Sudurpashchim Province": [
      "Bhajani", "Bhimdatta-Mahendranagar", "Dhangadhi", "Gauriganga", "Ghodaghodi", "Godawari",
      "Lamki Chuha", "Tikapur"
    ]
  };

  const areaData = {
    // Bagmati Zone Areas
    "Banepa": ["Banepa Chowk Area", "Basghari Area", "Bhainsepati Area", "Budol Area", "Chandeshwori Temple Area", "Dhulikhel Area", "Kathmandu University Area", "Nala", "Naya Basti Area", "Sanga", "Tindobato Area", "Ugratara Janagal Bus Stop Area"],
    "Bhaktapur": ["Balkot Area", "Biruwa Buspark Area", "Bode", "Duwakot", "Gaththaghar Area", "Jagati Area", "Kamalbinayak Area", "Katunje Area", "Kausaltar Area", "Kharipati", "Lohakanthali Area", "New Thimi", "Old Thimi", "Palanse", "Sallaghari Area", "Sano Thimi Area", "Sirutar", "Suryabinayak Area"],
    "Bharatpur": ["Airport Area", "Barhaghare Area", "Belchowk Area", "Bhojad Area", "Birendra Campus Area", "Buspark Area", "Cancer Hospital Area", "Champa Chaur Area", "Chanauli", "Chaubiskoti Area", "Fulbari", "Furti Chowk", "Gauriganj Area", "Hakim Chowk Area", "Indradev Marga Area", "Jalma Hall Area", "Jugedi Area", "Junhall Road", "Kamal Nagar Area", "Krishnapur Area", "Lankhu Area", "Lions Chowk Area", "Mangalpur", "Munal Chowk Area", "Narayani Path Area", "Paras Buspark Area", "Pokhara Buspark Area", "Putalisadak Area"],
    "Bhimeshwor - Charikot": ["Charihang", "Dolakha Bazar Area", "Makaibari"],
    "Bidur": ["Buspark Chowk", "Bidur Chowk", "Colony Area", "Trishuli Bazar"],
    "Hetauda": ["Bastipur", "Buddha Chowk", "Cement Factory Area", "Chauki Tole Area", "Hetauda Bus Park Area", "Hetauda Industrial Estate", "Hupra Chaur Area", "Kamal Dada", "Kamane", "Makwanpur Campus Area", "Manahari Bazar", "Nawalpur", "Padam Pokhari", "Rajaiya", "Ratomate Bazar Area", "Sanopokhara Area", "Seema Chowk Area", "TCN Area", "Thana Bharyang Area", "Unilever Factory Area"],
    "Kalika": ["Gunjaman Singh Memorial Hospital Area", "Jirauna Chowk", "Jutpani Chowk", "Kholesimal", "Subba Chowk"],
    
    // Kathmandu Metro Areas
    "Kathmandu Metro 10 - New Baneshwor Area": ["Apex College Area - Pipal Bot", "Bijuli Bazar", "New Baneshwor Chowk", "Ratna Rajya Area", "Shankhamul Area", "Thapagaun Area"],
    "Kathmandu Metro 11 - Maitighar Area": ["Babarmahal", "Maitighar"],
    "Kathmandu Metro 12 - Teku Area": ["Teku", "Thapathali", "Tripureshwor"],
    "Kathmandu Metro 13 - Kalimati Area": ["Bafal", "Kalimati", "Soalteemode", "Tahachal"],
    "Kathmandu Metro 14 - Kuleshwor Area": ["Balkhu", "Kuleshwor", "Ravi Bhawan"],
    "Kathmandu Metro 15 - Swayambhu Area": ["Bahiti", "Bijeshwori", "Chhauni", "Dallu", "Kimdol", "Sobhabhagawati", "Swayambhu - Bhuikhel", "Tankeshwor"],
    "Kathmandu Metro 16 - Nayabazar Area": ["Balaju - Bypass", "Balaju Chauki", "Balaju Chowk", "Balaju - Machha Pokhari", "Banasthali", "Banasthali Dhungedhara", "Kaldhara", "Khusibu", "Paknajol"],
    "Kathmandu Metro 17 - Chhetrapati Area": ["Chhetrapati", "Dhalko", "Naradevi", "People's Dental Campus Area", "Sorhakhutte"],
    "Kathmandu Metro 18 - Raktakali Area": ["Bhurungkhel", "Raktakali"],
    "Kathmandu Metro 19 - Hanumandhoka Area": ["Hanumandhoka", "Tamsipakha"],
    "Kathmandu Metro 1 - Naxal Area": ["Durbarmarg", "Hattisar Area", "Naxal Bhagwati Bahal Area", "Naxal Narayan Chour"],
    "Kathmandu Metro 20 - Marutol Area": ["Jaishidebal", "Marutole"],
    "Kathmandu Metro 21 - Lagantole Area": ["Ikubahal", "Lagantole"],
    "Kathmandu Metro 22 - Newroad Area": ["Dharmapath", "Khichhapokhari", "Newroad", "Tebahal"],
    "Kathmandu Metro 23 - Basantapur Area": ["Basantapur"],
    "Kathmandu Metro 24 - Indrachowk Area": ["Indrachowk"],
    "Kathmandu Metro 25 - Ason Area": ["Ason"],
    "Kathmandu Metro 26 - Samakhusi Area": ["Gongabu Chowk", "Samakhusi"],
    "Kathmandu Metro 26 - Thamel Area": ["Galkhopakha", "Tengal"],
    "Kathmandu Metro 27 - Bhotahiti Area": ["Bhotahiti"],
    "Kathmandu Metro 28 - Bagbazar Area": ["Bagbazar", "Mehpi"],
    "Kathmandu Metro 28 - Kamaladi Area": ["Bir Hospital", "Kamaladi", "Lainchaur"],
    "Kathmandu Metro 29 - Anamnagar Area": ["Anamnagar", "Ratnapark"],
    "Kathmandu Metro 29 - Putalisadak Area": ["Bhaktapur Buspark", "Putalisadak", "Tundikhel"],
    "Kathmandu Metro 2 - Lazimpat Area": ["Dhobichaur", "Lazimpat", "Singha Durbar"],
    "Kathmandu Metro 30 - Maitidevi Area": ["Dillibazar Pipalbot", "Maitidevi", "Newplaza Area"],
    "Kathmandu Metro 31 - Min Bhawan Area": ["Aloknagar", "Min Bhawan"],
    "Kathmandu Metro 32 - Koteshwor Area": ["Chhitij Nagar", "Jadibuti Area", "Koteshwor Chowk"],
    "Kathmandu Metro 32 - Tinkune Area": ["Subidhanagar", "Tinkune"],
    "Kathmandu Metro 3 - Baluwatar Area": ["Baluwatar", "Lamtangin Marg"],
    "Kathmandu Metro 3 - Maharajgunj Area": ["Basundhara (inside ringroad area)", "Narayan Gopal Chowk Area"],
    "Kathmandu Metro 4 - Bishalnagar Area": ["Bishalnagar", "Chandol"],
    "Kathmandu Metro 5 - Tangal Area": ["Bhatbhateni", "Handigaun"],
    "Kathmandu Metro 7 - Chabahil Area": ["Chabahil Chowk", "Chuchepati"],
    "Kathmandu Metro 8 - Gaushala Area": ["Gaushala", "Jayabageshwori"],
    "Kathmandu Metro 9 - Sinamangal Area": ["Airport", "Battisputali", "Sinamangal"],
    
    // Kathmandu Outside Ring Road
    "Kathmandu Outside Ring Road": ["28 Kilo Area", "36 Kilo Area", "Bakhundole Area", "Bagdole Area", "Basundhara Area", "Bhatke Ko Pool", "Bhutkhel", "Bich Bazar", "Bhandari Gaun", "Bhandara", "Bakular", "Army Camp Gate", "Budhanilkantha", "Basbari Area", "Budhanilkantha Nayapul", "Chapali Area", "Chunikhel Buspark Area", "Golfutar Area", "Hatiigauda Area", "Kapan Akasedhara", "Kapan Chauki Area", "Kapan Saraswotinagar", "Mandikhatar Area", "Narayanthan Temple Area", "Paiyatar Area", "Pasikot Area", "Chandragiri", "Balambu Area", "Dahachowk", "Gurjudhara Area", "Kalanki Area", "Khadka Gaun", "Macchegaun", "Matatirtha Area", "Nagdhunga", "Satungal Area", "Thankot Checkpost Area", "Tinthana Area", "Dakshinkali", "Chalnakhel", "Pharping", "Gokarneshwar", "Arubari", "Attarkhel Area", "Jorpati Area", "Jorpati Narayantar", "Jorpati Nayabasti", "Makalbari", "Makalbari Dakshindhoka", "Sundarijal", "Tinchuli", "Nayapati", "Gokarneshwor Temple Area", "Saranpur", "Kageshwori Manohara", "Gothatar Tej Binayak Chowk", "Green Hill City Area", "Mulpani", "Thali", "Kirtipur", "Buspark Area", "Chovar", "Nayabazar Area", "Panga Area", "TU Area", "Taudaha", "Tyanglaphat Area", "Nagarjun", "Banasthali Kharibot Chowk", "Bhimdunga", "Boharatar Area", "Buddha Park Area", "Dadapauwa Ramkot Area", "Naya Naikap", "Nursery chowk", "Padma Colony", "Purano Naikap", "Radhakrishna mandir", "Sano Bharyang Area", "Shankharapur", "Salambutar", "Sankhu", "Tarakeshwor", "Dandagaun Area", "Dharmasthali", "Goldhunga Nagarjun School Area", "Hiledol Area", "Jarankhu Area", "Kavresthali Buspark Area", "Lolang Area", "Manamaiju Area", "Nepaltar Area", "Phutung Bus Stop Area", "Purano Gueshwari Area", "Tokha", "Baniyatar", "Bhatke Ko Pool", "Dhapasi Area", "Gongabu Area", "Grande Area", "Jalpachowk", "Suryadarshan Height", "Tokha Ganeshthan Area"],
    
    // Other Bagmati cities
    "Khairehani": ["Jyamire"],
    "Lalitpur Inside Ring Road": ["Bakhundole Area"],
    "Lalitpur Outside Ring Road": ["Bagdole Area", "Bich Bazar", "Bhandari Gaun", "Cp Chowk", "Godawari - Bajrabarahi Area", "Godawari - Botanical Garden Area", "Godawari - Chapagaun Buspark Area", "Godawari - Jharuwarasi", "Godawari - Thaiba", "Godawari - Thecho", "Karyabinayak - Chhampi", "Karyabinayak - Chunikhel", "Karyabinayak - Dhaichhap", "Karyabinayak - Khokana", "Karyabinayak - Tikabhairabh", "Lalitpur - Bhaisepati Area", "Lalitpur - Bungamati Area", "Lalitpur - Chokhel Area", "Lalitpur - Dhapakhel Area", "Lalitpur - Dholahiti", "Lalitpur - Harisiddhi Patan Area", "Lalitpur - Imadole Area", "Lalitpur - Khumaltar Area", "Lalitpur - Loha Chowk", "Lalitpur - Nakhipot Area", "Lalitpur - Nakhipot Kantipur Colony", "Lalitpur - Nakhu Area", "Lalitpur - Ranibu Area", "Lalitpur - Sanepa Indrayani Mandir", "Lalitpur - Sunakoti Area", "Mahalaxmi - Changathali", "Mahalaxmi - Lamatar Bus Stop Area", "Mahalaxmi - Lubhu", "Mahalaxmi - Tikathali", "Maale Bagar", "Ward 1 - Kupandol Area", "Ward 2 - Jhamsikhel Area", "Ward 2 - Kalopul Area", "Ward 2 - Sanepa Area", "Ward 3 - Pulchowk Area", "Ward 4 - Jawalakhel Area", "Ward 5 - Kumaripati Area", "Ward 5 - Patan Hospital Area", "Ward 6 - Kanibahal Area", "Ward 7 - Sundhara Area", "Ward 8 - Guitole Area", "Ward 9 - Balkumari Area", "Ward 9 - Chayasal Area", "Ward 10 - Chakupat Area", "Ward 11 - Banglamukhi Area", "Ward 12 - Thaina Area", "Ward 14 - Kusunti Area", "Ward 15 - Lagankhel Area", "Ward 15 - Satdobato Area", "Ward 16 - Mangalbazar Area", "Ward 17 - Gwarko Area", "Ward 19 - Macchindrabahal Area", "Ward 20 - Patandhoka Area"],
    "Nilkantha - Dhading": ["Kharibot", "Nilkantha School Area", "Pahare Chautara"],
    "Panauti": ["Aapghari", "Panauti Municipality Office Area", "Panauti Museum Area", "Puchhar Bazar"],
    "Panchkhal": ["Khurkhure", "Panchkhal Municipality Area", "Wolachhen Bagaicha Area"],
    "Rapti": ["Chitrasari Area", "Simle Gairi"],
    "Ratnanagar": ["Chitrasari Area", "Campus Stop Area", "Hattichowk Area", "Sauraha Chowk"],
    "Sindhuli-Kamalamai": ["Keraghari", "Lamidanda", "Sindhuli Bus Park Area", "Sindhuli Haat Bazaar", "Dhungrebaas", "Dhura Bazaar", "Fm Marga", "Laxman Chowk", "Milan Chowk", "Siddha Baba Chowk", "Tamaghat Chowk", "Tadi Bazar", "Zero Kilo"],

    // Gandaki Zone Areas
    "Baglung Bazaar": ["Jeep Park", "Lali Gurans Chowk", "Tiger Chowk", "Traffic Chowk", "Upallachaur", "Yatyat Karyalaya Area"],
    "Beni": ["Birendra Chowk", "Campus Chowk", "Hospital Chowk", "Kali Pool Buspark", "New Road Area"],
    "Bhimad": ["Bhimad Bazaar", "Male Bagar Bazaar", "Purano Bazaar", "Tanahu Technical School Area"],
    "Damauli": ["Aadikavi Bhanubhakta Campus Area", "Bhadgau", "Chapaghat", "Damauli Bazar", "Damauli Bus Station Area", "Damauli College", "Dihi Gaun", "District Hospital Area", "Immanuel Church Area", "Patan", "Vorletar Chowk"],
    "Devchuli": ["Daldale", "Dharapani Bazaar", "Milan Chowk", "Pragatinagar", "Rajahar Bazaar", "Sashwat Dham Area"],
    "Gaindakot": ["Congress Chowk", "Gaindakot Municipality Office Area", "Ganesh Mandir Area", "Harihar Mandir", "Harkapur Area", "Kali Gandaki Bus Stop Area", "Kalika Mandir Area", "Thumsi Area"],
    "Gorkha Bazaar": ["District Hospital Chowk", "Haramtari Chowk", "Patechaur", "Petrol Pump Area", "Purano Buspark", "Thana Chowk"],
    "Kawasoti": ["Bishnunagar", "Danda", "Gyanodaya Chowk", "Panchaknya Chowk", "Thakali Chowk"],
    "Kushma": ["Bhandari Tole", "Bunjee Side", "Jilla Prahari Karyala Chowk", "Khareha", "Sasatra Camp", "Shivalaya Chowk"],
    "Lekhnath": ["Arghau Chowk", "Budibazar Chowk", "Sishuwa Chowk", "Talchowk"],
    "Pokhara": ["Amarsingh Chowk Area", "Bagar Area", "Baglung Buspark Area", "Baidam Area", "Barpatan Area", "Birauta Area", "Birauta Chowk Area", "Traffic Chowk"],
    "Putalibazar": ["Badkhola Chowk", "Shahid Chowk"],
    "Shuklagandaki": ["Belchautara", "Dulegaunda Bazaar", "Khairenitar Bazar"],
    "Sundarbazar": ["Khatrithati", "Lamjung Campus Area", "Milan Chowk"],
    "Waling": ["Bhakunde Chowk", "Bhakunde Covered Hall Area", "Buddha Tole", "Dhor Phedi Area", "Nayapul", "Saulibazzar", "Suidibar Bus Park Area", "Surya Nepal Factory Area", "Waling Bus Park Area", "Waling Multiple Campus Area", "WCCI Chowk"],

    // Lumbini Zone Areas
    "Banganga": ["4 Number Chowk", "Bangain", "Bodegaun Chowk", "Chappar Gau", "Dhaneshpur", "Gajehada Bus Stop Area", "Jhanda", "Khane Pani Office Area", "Koili Bangai", "Manoharpur", "Motipur - Banganga", "Pipara Bazaar", "Supa Deurali Mandir - Banganga"],
    "Bardaghat": ["Bardaghat Bus Stop Area", "Basa Basahi Chowk", "Chisapani Hospital Area", "Mohini Cinema Hall Area", "Panchanagar", "Upahar Nagar Park Area"],
    "Butwal": ["Belbas", "Buddhanagar - Naharpur", "Buspark Area", "Butwal Campus Area", "Butwal Industrial Area", "Chauraha", "Deep Nagar", "Devinagar", "Fulbari", "Golpark", "Haatbazaar Area", "Kalika Nagar", "Laxminagar", "Maina Bagar Area", "Majuwa", "Milan Chowk", "Motipur Area", "Nayagaun", "Nepalgunj Road Area", "Ramnagar", "Semlar Area", "Sukhha Nagar", "Tamnagar", "Traffic Chowk Area", "Yogi Kuti Area"],
    "Dang - Ghorahi": ["Bharatpur Area", "Chaughera Area", "Ghorahi Buspark Area", "Nayabazar Area", "Newroad Area", "Ratanpur Area", "Sahidgate Area", "Traffic Chowk Area", "Tulsipur Chowk Area"],
    "Dang - Tulsipur": ["Bahini Chowk Area", "BP Chowk Area", "Ganeshpur Area", "Parseni Area", "Tarigaun Area", "Tulsipur Buspark Area"],
    "Devdaha": ["Bhaluhi", "Charange", "Ghodaha", "Khaireni", "Sitalnagar"],
    "Kohalpur": ["Babanagar", "Chappargaudi", "Happy Water Park Area", "Kaushila Nagar", "Kohalpur Chowk", "Kohalpur Police Beat No 1 Area", "Madan Chowk", "Manakamana Chowk", "Nepalgunj College Area", "Nepalgunj Medical College Area", "Siddha Nagar"],
    "Lamahi": ["Bangaun", "Bankatta", "Deukhuri Campus Area", "Gurjihawa", "Lamahi Bus Park Area", "Lamahi Municipality Office Area", "Namai", "Narti", "Shantinagar"],
    "Lumbini Sanskriti": ["Lumbini Bikas Kosh Area", "Madhubani", "Mahajidiya", "Padariya", "Tenuhawa"],
    "Nepalgunj": ["Adarsh Nagar Area", "Basudevpur Area", "Belaspur Area", "Bhawanipur Area", "BP Chowk Area", "Dhamboji Area", "Indrapur Area", "Jaisapur Area", "Khaskarkado Area", "Manikapur Area", "Nepalgunj Buspark Area", "Prasapur Area", "Puraina Area", "Udayapur Area"],
    "Ramgram": ["Bhumahi", "Buddha Chowk", "Durga Mandir", "Parasi Bus Park Area", "Ramagrama Relic Stupa Area", "Ramgram Municipality Office Area", "Sukrauli"],
    "Sainamaina": ["Basgadi Area", "Buddhanagar Area", "Murgiya", "Ramapur Area", "Ranibagiya", "Saljhandi Area"],
    "Shivaraj - Chanauta": ["Chanauta Bus Stop Area", "Halla Nagar", "Jawabhari", "Kharendrapur", "Laxmi Tole", "Samiti Chowk", "Shivapur Haat Bazaar"],
    "Sidarthanagar - Bhairahawa": ["Bhairahawa Airport Area", "Bhairahawa Buspark Area", "Brishapati College Area", "Buddha Chowk Area", "Darkachua Area", "Devkota Chowk Area", "Durga Colony", "Electricity Office Area", "Milan Chowk Area", "Ranigaun Area", "Universal College Area"],
    "Sunwal": ["Badera", "Bankatti", "Jyamire", "Kerbani", "Mahakavi Devkota Campus Area", "Sunwal Bus-Station Area", "Sunwal Church Area", "Swathi Area"],
    "Tansen": ["Bartung Bus Stop Area", "Hotel Srinagar Area", "Lumbini Medical College Area", "Mehaldhara", "Narayansthan Pond Area", "Palpa Eye Hospital Area", "Palpa Hospital Area", "Taksar Tole", "Tansen Bus Park Area", "Tansen Multiple Campus Area", "United Mission Hospital Area"],
    "Taulihawa - Kapilvastu": ["Jamohara Area", "Kapilvastu Multiple Campus", "Kapilvastu Museum", "Taulihawa Bus Station", "Taulihawa Haat Bazaar", "Tilaurakot"],
    "Tilotama": ["12 Number Area", "4 Number Area", "Banbatika", "Bhalwari", "Bihuli", "Dinganagar", "Drivertol", "Janakinagar", "Kotihawa", "Manglapur", "Manigram", "Nayamil", "OSHO", "Pathardada", "Sakhwani", "Shankhanagar", "Sitarice Mill"],

    // Madhesh Province Areas
    "Bardibas": ["Bardibas Bus Stop Area", "Bardibas Hospital Area", "Baridibas", "Bishwakarma Mandir Area", "Dhalkebar", "Gauridanda", "Lalgadh"],
    "Birgunj": ["Adarshnagar Area", "Birgunj Buspark Area", "Birgunj Customs Area", "Birta Area", "Brahma Chowk Area", "Chhapkaiya Area", "Chitragupt Area", "Gahawa Mai Area", "Ghadiharwa Pokhari Area", "Ghantaghar Area", "Minabazaar Area", "Murali Area", "Nagwa Pokhari", "New ICP Dryport", "Powerhouse Area", "Pratima Chowk Area", "Radhemai Area", "Ranighat Area", "Resham Kothi Area", "Shreepur Area"],
    "Chandrapur": ["Buspark Area", "Chapur Bazar", "Laxminiya", "Ramdaiya", "Sakhuwa Bazar", "Sapahi"],
    "Chhireswarnath": ["Chhireswarnath Durga Chowk", "Chhireswarnath Police Station Area"],
    "Dhanushadham": ["Bhiman Chowk", "Dhanushadham Municipality Office Area", "Dharapani Chowk", "Govindapur", "Kisanpur", "Kumhara", "Tejnagar", "Yagyabhumi"],
    "Golbazar": ["Campus Area", "Golbazar Main Chowk", "Mahajan Tole", "Maruti Cement Factory Area", "Naya Choharwa", "Purwa Bus Stop Area"],
    "Hansapur": ["Belhi Chowk", "Hanspur Municipality Office Area", "Kathapulla", "Suga Nikash"],
    "Hariwan": ["Aditya Batika Chowk", "Bagmati Karmaiya Area", "Barhathawa", "Chaturbhujeshwar Multiple Campus Area", "Chini Mill Area", "Dabri Bazar", "Dharahara Chowk", "Ganesh Chowk", "Ghurkauli Chowk", "Hariyon Bus Park Area", "Hariyon Park Area", "Jirat Bazar", "Milan Chowk", "Naya Road Chowk Area", "Purwa Bus Park Area", "Putali Chowk Area", "Shankarpur Area", "Sita Palace Hotel Area", "Solti Bazaar", "Sunrise School Area"],
    "Jaleswor": ["Jaleswor Buddhijibi Chowk", "Mahadev Mandir", "Mahendra Chowk", "Parkauli Chowk", "Pipara", "Shankar Chowk", "Zero Mile"],
    "Janakpur": ["Bahuarwa Area", "Balmiki Nagar", "Bhanu Chowk", "Brahmapura Chowk", "Janaki Mandir Area", "Janaki Nagar", "Janakpur Airport Area", "Kadam Chowk", "Kishori Nagar", "Kurtha", "Lohana Area", "Madhesh Pradesh Sabha Area", "Mahavir Chowk", "Mahuwa-Kapileswor", "Manharpur", "Mills Area", "Mujelia Area", "Murali Chowk", "Pidari Chowk", "Pulchowk", "Ramanand Chowk", "Ram Chowk", "Thapa Chowk", "Viswakarma Chowk", "Wakil Tole", "Zero Mile"],
    "Jeetpur - Simara": ["Auraha Area", "Badan Nagar Area", "Bajeni Area", "Barack Area", "Boring Tole", "Hulas Area", "Jagadamba Area", "Jeetpur Bazaar Area", "Kera Dhoka Area", "Laxmi Hall Area", "Narbasti Area", "Nepal Boards Area", "Paani Tanki Area", "Pathadi Tole", "Parwanipur", "Pathlaiya Traffic Chowk", "Rampur Tokani - Dabur Area", "Shanti Tole", "Shiv Parvati Hall Area", "Simara Airport Area", "Simara Chowk Area", "Simara Colony", "Simara Powerhouse Area", "Surya Niwas Area", "Telecom Area"],
    "Kalaiya": ["Bharat Chowk", "Buspark Area", "CDO Office Area", "Gupta Oil Area", "Hanuman Mandir Area", "Kalaiya Bajar", "Kalaiya Barewa Hospital Area", "Kalaiya Malpot Area", "Motisar", "Parsauni", "Rajaram Campus Area", "Shiksha Office Area", "Siddheshwor Mandir Area", "Vegetable Mart Area"],
    "Lahan": ["Ganesh Chowk", "Ganeshpur", "ISKCON Area", "J.S. Murarka Campus Area", "Lahan Municipality Office Area", "Lahan Post Office Area", "Lahan Vegetable Market", "Nepal Telecom Area", "Padariya", "Saptarishi Hospital Area", "Sisawani"],
    "Lalbandi": ["Bayalbas Bazaar", "Dhukdhuki FM Area", "Janajyoti Multiple Campus Area", "Jutpani Bus Stop Area", "Kalinjor School Area", "Khatiwoda Chowk", "Laxmipur", "Marin Jane Chowk", "Mejarkunj Chautara", "Netragunj", "Pattharkot", "Raniganj Chowk"],
    "Malangwa": ["Buspark Area", "Ghamhariya Bus Stop Area", "Jilla Bikash Samati Chowk", "Kabilashi Bus Stop Area", "Krishna Chowk", "Malangwa Nagarpalika Chowk", "Salempur Chowk"],
    "Mirchaiya": ["Bhagwatpur", "Fulbariya School Area", "Ghurmi Bazaar", "Katari Chowk", "Mirchaiya Bazar", "Sanstha Chowk"],
    "Mithila": ["Dhalkebar Chowk", "Dhalkebar Substation Area", "Jamunabas Bus Park Area", "Kushwaha Chowk", "Mithila Municipality Office Area", "Ram Laxman Chowk"],
    "Mithila Bihari": ["Bhutahi Bazar", "Mauwahi", "Purandaha Bazaar", "Tarapatti Bazaar", "Tarapatti Sirsiya", "Thera"],
    "Nagarain": ["Fulgama", "Hospital Chowk", "Jatahi", "Lagmagadhaguthi", "Lagmagadhaguthi Masjid Area", "Maleth", "Nochha Park Area", "Pulchowk", "Vegetable Market Area"],
    "Rajbiraj": ["Airport Area", "Boriya Petrol Pump Area", "Gajendra Narayan Singh Chowk", "Islampur Purni Pokhri", "Karn Park Area", "Kharsal Tole", "Rajbiraj Model Campus Area", "Raj Devi Field Area", "Shree Shiv Baba Mandir Area", "Tetri Gachhi Chowk", "Turanti Pokhari Area", "Urban Green Park Area"],
    "Sabaila": ["Bhathihan Bazaar", "Hanuman Chowk", "Sabaila Bazaar", "Sabaila Municipality Office Area", "Thilla Yaduwa"],
    "Shahidnagar": ["Aadarsha Chowk", "Chandani Chowk", "Hanuman Mandir Area", "Noori Jama Masjid Area", "Shahid Municipality Office Area", "Yadukuha Police Beat Area"],

    // Karnali Province Areas
    "Bheriganga": ["Bahunichaur", "Chhinchu", "Jahare Bazaar", "Ramghat"],
    "Birendranagar - Surkhet": ["Army Camp Area", "Dhuliyabit Area", "Kakrebihar Area", "Mangalgadhi Chowk Area", "Radio Nepal Area", "Surkhet Hospital Area", "Uttarganga Area"],
    "Lekbeshi": ["Dashrathpur", "Salli Bazar"],

    // Koshi Province Areas  
    "Arjundhara": ["Arjundhara Municipality Office Area", "Bhaisabadi", "Laxmipur Bus Stop Area", "Post Office Area"],
    "Belbari": ["Aadarsha Boarding School Area", "Belbari Health Post Area", "Belbari Multiple Campus Area", "Belbari Paschhim Bus Park Area", "Betana Wetland", "Bhaunne Bazaar", "Dangihat Rangashala Area", "Laxmi Marga Chowk", "Malpot Line", "Sahakari Tole"],
    "Bhadrapur": ["Bhadrapur Buspark Area", "Campus Mode Area", "Dukhi Tole Area", "Giri Chowk Area", "Kirat Colony Area", "Mechi Hospital Area"],
    "Biratnagar": ["Roadcess/Koshi Project Area", "Aarti Strip Factory Area", "Bargacchi Chowk Area", "B.FM. Area", "Bhirkuti Chowk Area", "Buddha Chowk Area", "Campus Road Area", "DPS School Area", "Haat Khola Area", "Hospital Chowk", "Ikrahi Area", "Jaljala Chowk Area", "Janpathtole Area", "Jhorahat Area", "Kanchanbari Area", "Katahari Area", "Keshaliya Rampur", "Kharji Kohobara", "Meghabari Area"],
    "Birtamod": ["Atithi Sadan Area", "Beldangi Chowk Area", "Bhagwan Chowk", "Birtabazar Area", "Birtamod Buspark Area", "Buttabari Area", "Charpane Area", "Dharmakata Road Area", "Garamuni Campus Area", "Hanuman Central Area", "Harkalal Marga Area", "Heaven Water Park Area", "Jatrubadi Chowk Area", "Kankai Road Area", "Mahananda Chowk", "Mechi Eye Hospital Area"],
    "Chandragadi": ["Bhaire Chowk", "Chaitu Mandir Area", "Chandragadi Airport Area", "Devkota Chowk Area", "Dhanushmod Area", "Falgunanda Chowk Area", "Gumaune Area", "Havildar Chowk Area", "Jagriti Nagar", "Kendramode Area", "Krishna Mandir Area", "Lekhnath Chowk Area", "Makalu Tole Area", "Mahendra Park Area", "New Amda Hospital Area", "Sangam Chowk Area", "Shanti Chowk Area", "Shanti Marga Area"],
    "Damak": ["Beldangi Area", "Buddha Chowk Area", "Damak Buspark Area", "Damak Multiple Campus Area"],
    "Dhankuta": ["Adalat Road", "Dadagaun Football Ground", "Dhankuta Bus Park Area", "Dhankuta Multiple Campus Area", "Dhankuta Stadium", "Heli Pad Area", "Hile", "Mangalbarey Area", "Phushre Area", "Purano Bazaar", "Putali Line", "Shyam Chowk Area", "Tinkune Area", "Zero Point Area"],
    "Dharan": ["Bagarkot Area", "Bargachhi Area", "Bhanu Chowk Area", "Bhotepul Area", "Bijayapur Area", "BP Health Science Institute Area", "Chata Chowk Area", "Deshi Line", "Dharan Railway Area", "Dharan Stadium Area"],
    "Duhabi": ["Ball Statue", "Duhabi Bus Park Area", "Sonapur Bus Park Area"],
    "Gauradaha": ["Beldangi Chowk", "Campus Mode", "Dhobiniya Chowk", "Dipu Chowk", "Gauradaha Bazaar", "Gauriganj Bazar", "Mechi Eye Hospital Area", "Milan Chowk", "Mahendra Ratna Multiple Campus Area", "Tilkeni Mod"],
    "Ilam": ["Bhrikuti Chowk", "Fikkal", "Ilam Bazar Area", "Ilam Bus Park Area", "Ilam Municipality Area", "Ilam View Tower Area", "Kalinaag Mandir Area", "Kharel Dada"],
    "Inaruwa": ["Bihibare Hat Bazar", "Inaruwa Bus Stop Area", "Inaruwa Hospital Area", "Jhumka", "Sakhuwagachhi", "Simpane Pragati Tole"],
    "Itahari": ["Army Headquarters Area", "Balgram Area", "Bhetghat Chowk", "Gaisar Area", "Halgada Chowk Area", "Hatiya Line Area", "Itahari Buspark Area", "Jhumka City Area", "Khanar City Area", "Labipur Area", "Pakali Area", "Pandhare Tole Area", "Suvidha Nagar", "Swagat Tole Area", "Tarahara Area", "Tax Office Area", "Traffic Chowk Area", "Tulasibari Playground Area"],
    "Kakarbhitta": ["Barmeli Tole Area", "Eye Hospital Area", "Kakarbhitta Buspark Area", "Kakarbhitta Customs Area", "Post Office Area", "Pragati Tole Area"],
    "Kankai": ["Champapur Playground Area", "Kalisthan Chowk", "Kankai Multiple Campus Area", "Kankai Municipality Office Area", "Koti Hom Bus Park Area", "Sangam Tole", "Surunga Chowk", "Subedi Chowk"],
    "Letang Bhogateni": ["Budhabare", "Letang Bazaar"],
    "Pathari-Shanischare": ["Aitabare Chowk", "Bhutanese Refugee Camp Area", "Bokre Chowk", "Buddha Chowk", "Haatkhola Bazaar", "Hasandaha Bus Stop Area", "Pathari Bazaar", "Ratna Park Area", "Subedi Chowk"],
    "Rangeli": ["Aamtola Bazaar", "Drabesha", "Janata Multiple Campus Area", "Rangeli Bazaar", "Rangeli Hospital Area", "Sombare Bazar", "Tribhuwan Chowk"],
    "Ratuwamai": ["Aambari Chowk", "Damravitta Bazaar", "Itahara Chowk", "Sijuwa Chowk"],
    "Shivasatakshi": ["Amardaha", "Dainiya", "Dohamana Pashu Bazar"],
    "Sunawarshi": ["Amardaha", "Dainiya", "Dohamana Pashu Bazar"],
    "Sundar Haraincha": ["Baliya Chowk", "Birat Chowk Area", "Dulari Chowk", "Goth Gaun City Area", "Khorsane", "Khorsane Chowk", "Lalvitti"],
    "Triyuga": ["Chuhade Chowk", "Jaljale Bazaar", "Main Chowk", "Puma Chowk", "Triyuga Janata Multiple Campus Area", "Udayapur FM Area", "Yalambar Tole"],
    "Urlabari": ["Aaitabare Area", "Bargachhi Chowk Area", "Durgapuri Area", "Madhumalla Area", "Mangalbare Area"],

    // Sudurpashchim Province Areas
    "Bhajani": ["Bhajani Trishakti", "Joshipur", "Thapapur - Mahadeuli"],
    "Bhimdatta-Mahendranagar": ["Bhagatpur", "Bhasi", "Gadda Chauki", "Gobariya", "Mahendranagar Bazar", "Suda"],
    "Dhangadhi": ["Adarsha Tole Area", "Airport Area", "Badhara Area", "Baiya Behandi", "Bishalnagar Area", "Boradadi Area", "Campus Road Area", "Chatakpur Area", "Chauraha Area", "Ganesh Mandir Area", "Hasanpur Area", "Jai Area", "Kailali Customs Office", "Kailali District Court Area", "Khaptad Chowk", "LN Chowk", "Milan Chowk Area", "Om Shanti Tole", "Rajpur Area", "Santoshi Tole Area", "Satkar Chowk Area", "Shivpuri Dham Area", "Taranagar Area", "Tiketal Area", "Uttar Behandi"],
    "Gauriganga": ["Aambari Galli Area", "Banbehada Bazaar", "Chaumala Bazaar", "Kuchaini", "Mangalpur Bazaar"],
    "Ghodaghodi": ["Ghoda Ghodi Multiple College Area", "Pahalmanpur Bazaar", "Sukhad Bazaar"],
    "Godawari": ["Attariya Chowk", "Dixit Nagar", "Geta", "Krishna Mandir Tole", "Lalpur Football Ground Area", "Malakheti", "Shreepur"],
    "Lamki Chuha": ["Chisapani Bazaar", "Dododhara Chowk", "Ganeshpur Chowk", "Gulara Bus Park Area", "Lamki Bazaar", "Lamki Zero Mile", "Motipur", "Syaule Bazar"],
    "Tikapur": ["Bijayanagar", "Munuwa", "Narayanpur Chauraha", "Satti Bazaar", "Tikapur Airport Area", "Tikapur Campus Area", "Tikapur Poly Technical Area"]
  };

  const handleProvinceChange = (province: string) => {
    updateFormData("province", province);
    // Reset city and area when province changes
    updateFormData("city", "");
    updateFormData("area", "");
  };

  const handleCityChange = (city: string) => {
    updateFormData("city", city);
    // Reset area when city changes
    updateFormData("area", "");
  };

  const handleAreaChange = (area: string) => {
    updateFormData("area", area);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="province" className="text-sm font-medium">
          Province <span className="text-red-500">*</span>
        </label>
        <Select onValueChange={handleProvinceChange} value={formData.province || ""}>
          <SelectTrigger>
            <SelectValue placeholder="Select your province" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(provinceData).map((province) => (
              <SelectItem key={province} value={province}>
                {province}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="city" className="text-sm font-medium">
          City <span className="text-red-500">*</span>
        </label>
        <Select 
          onValueChange={handleCityChange} 
          value={formData.city || ""} 
          disabled={!formData.province}
        >
          <SelectTrigger>
            <SelectValue placeholder={formData.province ? "Select your city" : "Select province first"} />
          </SelectTrigger>
          <SelectContent>
            {formData.province && provinceData[formData.province as keyof typeof provinceData]?.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="area" className="text-sm font-medium">
          Area
        </label>
        <Select 
          onValueChange={handleAreaChange} 
          value={formData.area || ""} 
          disabled={!formData.city}
        >
          <SelectTrigger>
            <SelectValue placeholder={formData.city ? "Select your area" : "Select city first"} />
          </SelectTrigger>
          <SelectContent>
            {formData.city && areaData[formData.city as keyof typeof areaData]?.map((area) => (
              <SelectItem key={area} value={area}>
                {area}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="address" className="text-sm font-medium">
          Street Address
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <MapPin size={18} />
          </div>
          <input
            id="address"
            type="text"
            placeholder="Enter your street address"
            value={formData.address || ""}
            onChange={(e) => updateFormData("address", e.target.value)}
            className="input-field pl-10"
          />
        </div>
      </div>
    </div>
  );
};

export default AddressStep;
