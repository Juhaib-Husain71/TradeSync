import Skeleton from "react-loading-skeleton";

function SkeletonCard() {
  return (
    <div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div style={{width: "30%"}}>
                <Skeleton height={60} baseColor="#d9d9d9" highlightColor="#f5f5f5" duration={1.5} />
            </div>
            <div style={{width: "69%"}}>
                <Skeleton height={60} baseColor="#d9d9d9" highlightColor="#f5f5f5" duration={1.5} />
            </div>
        </div>
        <div style={{display: "flex"}}>
            
            <div style={{width: "30%"}}>
                <Skeleton count={7} height={50} baseColor="#d9d9d9" highlightColor="#f5f5f5" duration={1.5} />
            </div>


            <div></div>
        </div>
    </div>
  )
}

export default SkeletonCard;
