import Gallery4 from "@/components/ui/gallery4";

const procedureItems = [
  {
    id: "hybrid",
    title: "하이브리드 가슴성형",
    description:
      "듀얼 플레인 방법으로 근육 아래에 실리콘 보형물 삽입 + 자가 지방이식을 결합한 방식입니다. 보형물로 전체적인 크기를 키우고, 그 위를 지방으로 덮어 보형물의 경계가 느껴지지 않게 촉감과 모양을 자연스럽게 만듭니다.",
    href: "#consultation",
    image: "/ai_07.png",
  },
  {
    id: "augmentation",
    title: "가슴 확대 (보형물)",
    description:
      "듀얼플레인 수술 방법으로 근육 아래에 실리콘 보형물을 삽입하여 볼륨을 키우는 방식입니다. 확실한 사이즈 변화를 원하는 경우 가장 효과적입니다.",
    href: "#consultation",
    image: "/ai_10.png",
  },
  {
    id: "revision",
    title: "가슴 재수술",
    description:
      "기존 수술 결과가 불만족스럽거나 구형구축, 위치 이동 등의 부작용이 생겼을 때 진행합니다. 기존 보형물을 제거하고 새 보형물로 교체합니다.",
    href: "#consultation",
    image: "/ai_06.png",
  },
  {
    id: "eyelid",
    title: "쌍커풀",
    description:
      "매몰법: 실 봉합사만으로 라인을 고정합니다. 흉터가 거의 없고 회복이 빠르지만, 풀릴 가능성이 있습니다. 절개법: 피부를 절개해 불필요한 지방과 근육을 제거하고 라인을 만듭니다. 선명하고 확실한 라인을 원할 때 적합합니다.",
    href: "#consultation",
    image: "/ai_08.jpg",
  },
  {
    id: "eye-fat",
    title: "눈밑지방재배치",
    description:
      "눈 밑이 볼록하게 튀어나오거나 그늘진 경우, 결막 안쪽을 통해 지방을 평평하게 펴주는 수술입니다. 다크서클 개선과 인상 개선에 효과적입니다.",
    href: "#consultation",
    image: "/ai_09.jpg",
  },
  {
    id: "eyelid-surgery",
    title: "상하안검",
    description:
      "상안검: 처진 윗눈꺼풀을 개선합니다. 늘어진 피부를 잘라내 시야 확보와 눈매 교정을 돕습니다. 하안검: 처진 아래눈꺼풀을 개선합니다. 불룩한 지방을 정리하고 늘어진 피부를 당겨 고정하여 노화를 개선합니다.",
    href: "#consultation",
    image: "/ai_11.png",
  },
  {
    id: "liposuction",
    title: "지방흡입",
    description:
      "복부, 허벅지, 팔뚝 지방이 과도하게 축적된 부위의 지방 세포를 직접 추출하여 사이즈를 줄이는 수술입니다. 단순히 무게를 줄이기보다 라인을 매끄럽게 다듬는 '체형 교정'에 가깝습니다.",
    href: "#consultation",
    image: "/ai_12.png",
  },
  {
    id: "fat-transfer",
    title: "지방주입",
    description:
      "자신의 몸에서 채취한 지방을 추출한 뒤, 볼륨이 필요한 곳(이마, 볼, 팔자주름, 가슴 등)에 이식하는 방식입니다. 본인의 조직을 사용하므로 이물감이 적고 자연스러운 입체감을 줍니다.",
    href: "#consultation",
    image: "/ai_05.png",
  },
];

export default function Procedures() {
  return (
    <section id="procedures" className="bg-white">
      <div className="w-full max-w-content mx-auto px-6 pt-20 lg:pt-28 text-center">
        <span className="label-en block">Main Services</span>
      </div>
      <Gallery4
        title="에스엠성형외과 주력 시술"
        description="모든 수술은 환자 개개인의 체형·조직에 맞춘 맞춤 설계를 기본으로 합니다."
        items={procedureItems}
      />
    </section>
  );
}
