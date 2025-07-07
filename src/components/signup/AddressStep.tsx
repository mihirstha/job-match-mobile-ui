
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

  const handleProvinceChange = (province: string) => {
    updateFormData("province", province);
    // Reset city when province changes
    updateFormData("city", "");
  };

  const handleCityChange = (city: string) => {
    updateFormData("city", city);
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
