import Gallery4 from "@/components/ui/gallery4";

const procedureItems = [
  {
    id: "hybrid",
    title: "하이브리드 가슴성형",
    description:
      "보형물 + 자가 지방이식을 병행하는 시술입니다. 보형물로 전체 볼륨과 형태의 토대를 만들고, 채취한 자가 지방을 데콜테 라인과 경계부에 주입해 더 자연스럽고 풍성한 마무리를 실현합니다.",
    href: "#consultation",
    image: "/ai_07.png",
  },
  {
    id: "augmentation",
    title: "가슴 확대 (보형물)",
    description:
      "흉곽 너비·피부 탄력·출산력을 확인한 뒤 보형물 종류(라운드/앵커, 스무스/텍스처드)와 삽입 위치(근육 위/아래)를 결정합니다. 체형에 맞는 맞춤 설계로 자연스러운 결과를 목표로 합니다.",
    href: "#consultation",
    image: "/ai_10.png",
  },
  {
    id: "revision",
    title: "가슴 재수술",
    description:
      "구형구축·보형물 변위·좌우 비대칭·형태 변형·이물감·리플링 등 다양한 고민에 대응합니다. 초음파 검사로 현재 보형물 상태를 확인한 뒤 피막 절제 범위와 보형물 교체 여부를 결정합니다.",
    href: "#consultation",
    image: "/ai_06.png",
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
        description="에스엠성형외과는 최첨단 수술 장비를 보유하고 있지만, 장비 자체가 목적이 아닙니다. 모든 수술은 환자 개개인의 체형·조직에 맞춘 맞춤 설계를 기본으로 합니다."
        items={procedureItems}
      />
    </section>
  );
}
