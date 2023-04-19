import React, { useState, useEffect } from "react";
import Select from "react-select";
import data from "../utils/data.json";

const SelectBox = () => {
  const [country, setCountry] = useState(null);
  const [lang, setLang] = useState(null);
  const [langList, setLangList] = useState([]);
  const [link, setLink] = useState("");

  // handle change event of the country dropdown
  const handleCountryChange = (obj) => {
    setCountry(obj);
    setLangList(obj.languages);
    setLang(null);
  };

  // handle change event of the language dropdown
  const handleLanguageChange = (obj) => {
    setLang(obj);
  };

  // generate the link when both dropdowns are selected
  useEffect(() => {
    if (country && lang) {
      setLink(
        `https://www.${country.url}/search?q=Clue+Mediator&gl=${country.country_code}&hl=${lang.code}`
      );
    }
  }, [country, lang]);
  return (
    <>
      <div className="bg-gray-900 my-16 flex items-center justify-center">
        <div className="flex md:flex-row flex-col items-center py-8 px-4">
          {/* Code block starts */}
          <div className="flex flex-col md:mr-32">
            <label
              for="countries"
              className="block mb-2 text-sm font-medium text-white"
            >
              Select Car Company
            </label>
            <div style={{ width: 300 }}>
              <Select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block "
                placeholder="Select Country"
                value={country}
                options={data}
                onChange={handleCountryChange}
                getOptionLabel={(x) => x.region}
                getOptionValue={(x) => x.country_code}
              />
            </div>
          </div>
          {/* Code block ends */}
          {/* Code block starts */}
          <div className="flex flex-col md:mr-32 md:py-0 py-10">
            <label
              for="countries"
              className="block mb-2 text-sm font-medium text-white"
            >
              Select Car Model
            </label>
            <div style={{ width: 300 }}>
              <Select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block "
                placeholder="Select Language"
                value={lang}
                options={langList}
                onChange={handleLanguageChange}
                getOptionLabel={(x) => x.name}
                getOptionValue={(x) => x.code}
              />
            </div>
          </div>
          {/* Code block ends */}
          {/* Code block starts */}
          <div className="flex flex-col md:py-0 py-2">
            <label
              for="countries"
              className="block mb-2 text-sm font-medium text-white"
            >
              Select Car Fuel
            </label>
            <div style={{ width: 300 }}>
              <Select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block "
                placeholder="Select Language"
                value={lang}
                options={langList}
                onChange={handleLanguageChange}
                getOptionLabel={(x) => x.name}
                getOptionValue={(x) => x.code}
              />
            </div>
          </div>
          {/* Code block ends */}
        </div>
      </div>
      <span>
        <b>Link:</b> {country && lang ? link : "-"}
      </span>
    </>
  );
};

export default SelectBox;
