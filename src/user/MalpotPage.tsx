import BikramSambat from 'bikram-sambat-js';
import Img5 from '../assets/images/logo.png'
import { getNepalCurrentDate } from '../global/CurrentDate';
import { toNepalidate } from '../global/NepaliDate';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
const MalpotPage = () => {
  const malpot = useSelector((state: RootState) => {
    const malpots = state.malpots.malpots;
    return malpots[malpots.length - 1];
  });
  const {
    name = "",
    address = "",
    ward = "",
    municipality = "",
    number = "",
    area = "",
    certifiedDetails = "",
    remarks = "",
    previousMunicipality = "",
    previousWard = ""
  } = malpot || {};
  const currentDate = getNepalCurrentDate();
  const bsCurrent = new BikramSambat(currentDate, "AD").toBS();

  const [cYear, cMonth, cDay] = bsCurrent.split("-");
  const nToday = `${toNepalidate(cYear)}/${toNepalidate(cMonth)}/${toNepalidate(cDay)}`;
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white font-[Kalimati,serif]">
      {/* Header Section */}
      <div className="text-center mb-8">
        {/* Government Logo and Title */}
        <div className="flex items-left justify-left ">
          <div className="w-33 h-20 mr-20">
            {/* Nepal Government Emblem */}
            <div className='align-left'>
              <img

                src={Img5}
                alt="Nepal Government Emblem"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className=''>
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              इटहरी उपमहानगरपालिका
            </h1>
            <h2 className="text-3xl text-black mb-5">
              Itahari Sub-Metropolitan City
            </h2>
            <p className="text-xl text-gray-600">
              १ नं. वडा कार्यालय
            </p>
            <p className="text-xl text-gray-600">
              कोशी प्रदेश नेपाल
            </p>
          </div>
        </div>

        {/* Document Info */}
        <div className="flex justify-between items-start mt-6 text-sm">
          <div className="text-left">
            <p className="mb-1">पत्र संख्या २०८२/०६३</p>
            <p>च.नं. ..........</p>
          </div>
          <div className="text-right">
            <p>मिति: {nToday} </p>
          </div>
        </div>

        {/* Addressing */}
        <div className="text-left mt-6 mb-4">
          <p className="text-lg font-semibold mb-2">
            श्री भूमिसुधार तथा मालपोत कार्यालय</p>
          <p className="text-lg font-semibold mb-2"> इनरुवा , सुनसरी
          </p>
        </div>

        {/* Subject Line */}
        <div className="text-center my-6">
          <p className="text-lg font-semibold border-b-2 border-black inline-block pb-1">
            विषय:- घर बाटो प्रमाणित सम्बन्धमा ।
          </p>
        </div>
        <div className="text-lg ml-6 mr-4 font-semibold ">
          <p className="">
            प्रस्तुत विषय {address} वडा नं.{ward} बस्ने {name}ले यस कार्यालयमा पेश गरेको निवेदन सम्बन्धमा बुझ्दा निजको निवेदन तथा संग्लग्न कागज प्रमाणको आधारमा तपसिलका कित्ता नं.र क्षेत्रफल भएको जग्गामा घर बाटो भए / नभएको स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा १२(२)ङ(२८) बमोजिम प्रमाणित गरिन्छ।           </p>
        </div>

        {/* Table Section */}
        <div className="mt-8">
          <table className="min-w-full border-2 border-black text-center">
            <tbody>
              <tr className="border border-black">
                <td className="border border-black px-4 py-2">जग्गाधनीको नाम,थर ठेगाना </td>
                <td className="border border-black px-4 py-2">सबिक गा.पा.</td>
                <td className="border border-black px-4 py-2">हाल</td>
                <td className="border border-black px-4 py-2"> कित्ता नं.</td>
                <td className="border border-black px-4 py-2">क्षेत्रफल </td>
                <td className="border border-black px-4 py-2">प्रमाणित गरिएको व्यहोरा </td>
                <td className="border border-black px-4 py-2">कैफियत </td>
              </tr>
              <tr className="border border-black">
                <td className="border border-black px-1 py-1">
                  <div>{name}</div>
                  <div>{address}</div>
                  <div>वडा नं.{ward}</div>
                </td>
                <td className="border border-black px-4 py-2">{previousMunicipality} {previousWard && `वडा नं. ${previousWard}`}</td>
                <td className="border border-black px-4 py-2">
                  <div>{municipality}</div>
                  <div>वडा नं.१</div>
                </td>
                <td className="border border-black px-4 py-2">{number}</td>
                <td className="border border-black px-4 py-2 min-w-48 whitespace-nowrap">{area.replace(/[\r\n\t]/g, ' ').replace(/\s+/g, ' ').trim()}</td>
                <td className="border border-black px-4 py-2">{certifiedDetails}</td>
                <td className="border border-black px-4 py-2">{remarks}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MalpotPage;