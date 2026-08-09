const nodes = [
  [8,18],[21,8],[37,20],[55,9],[72,21],[91,12],
  [13,48],[30,39],[47,52],[64,40],[83,51],[95,36],
  [5,78],[24,68],[42,82],[60,69],[78,83],[94,72],
];

const links = [[0,1],[0,6],[1,2],[2,3],[2,7],[3,4],[4,5],[4,9],[5,11],[6,7],[6,12],[7,8],[7,13],[8,9],[8,14],[9,10],[9,15],[10,11],[10,16],[11,17],[12,13],[13,14],[14,15],[15,16],[16,17]];

const NeuralBackdrop = () => (
  <div className="neural-backdrop" aria-hidden="true">
    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
      <g className="neural-links">{links.map(([a,b],i)=><line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} style={{animationDelay:`${(i%7)*-.7}s`}}/>)}</g>
      <g className="neural-nodes">{nodes.map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i%5===0?0.65:0.38} style={{animationDelay:`${(i%6)*-.8}s`}}/>)}</g>
    </svg>
    <div className="pointer-light"/>
  </div>
);

export default NeuralBackdrop;
