import './style.css';

import * as d3 from 'd3';

import { Relation, interests } from './interests';

const width = 954;
const radius = width / 2;
const x = -width / 2;
const y = -width / 2;

const data = d3
  .stratify<Relation>()
  .id((d) => d.name)
  .parentId((d) => d.parent)(interests);

const root = d3
  .tree<Relation>()
  .size([2 * Math.PI, radius])
  .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth)(data);

root.sort((a, b) => d3.ascending(a.data.name, b.data.name));

const svg = d3
  .select('#app')
  .append('svg')
  .attr('viewBox', `${x} ${y} ${width} ${width}`);

const radialLink = d3
  .linkRadial()
  // @ts-ignore
  .angle((d) => d.x)
  // @ts-ignore
  .radius((d) => d.y);

svg
  .append('g')
  .attr('fill', 'none')
  .attr('stroke', '#555')
  .attr('stroke-opacity', 0.4)
  .attr('stroke-width', 1.5)
  .selectAll('path')
  .data(root.links())
  .join('path')
  // @ts-ignore
  .attr('d', radialLink);

svg
  .append('g')
  .selectAll('circle')
  .data(root.descendants())
  .join('circle')
  .attr(
    'transform',
    (d) => `rotate(${(d.x * 180) / Math.PI - 90}) translate(${d.y},0)`
  )
  .attr('fill', (d) => (d.children ? '#555' : '#999'))
  .attr('r', 2.5);

svg
  .append('g')
  .selectAll('text')
  .data(root.descendants())
  .join('text')
  .attr(
    'transform',
    (d) =>
      `rotate(${(d.x * 180) / Math.PI - 90}) translate(${d.y},0) rotate(${
        d.x >= Math.PI ? 180 : 0
      })`
  )
  .attr('dy', '0.31em')
  .attr('x', (d) => (d.x < Math.PI === !d.children ? 6 : -6))
  .attr('text-anchor', (d) => (d.x < Math.PI === !d.children ? 'start' : 'end'))
  .text((d) => d.data.name)
  .clone(true)
  .lower()
  .attr('stroke', 'white');

function zoomHandler(event: any) {
  svg.attr(
    'viewBox',
    `${x - event.transform.x * 0.75} ${y - event.transform.y * 0.75} ${
      width * event.transform.k
    } ${width * event.transform.k}`
  );
}

const zoom = d3.zoom().on('zoom', zoomHandler);
// @ts-ignore
svg.call(zoom);
