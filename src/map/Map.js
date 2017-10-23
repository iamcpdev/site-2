const React = require('react')
const {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} = require('react-simple-maps')
const { colors, grays } = require('../theme')
const locations = require('./locations')
const geo = require('./geo')
const styled = require('styled-components').default

const StyledGeo = styled(Geography)`
  fill: ${colors.blue[0]};
  stroke: ${colors.snow};
  stroke-width: 1;
  outline: none;
`

export default props => (
  <ComposableMap
    width={1024}
    style={{
      width: '100%',
      height: 'auto'
    }}
    {...props}
  >
    <ZoomableGroup disablePanning>
      <Geographies geographyUrl="/geo.json">
        {(geographies, projection) =>
          geographies.map((geography, i) => (
            <StyledGeo key={i} geography={geography} projection={projection} />
          ))}
      </Geographies>
      <Markers>
        {locations.map((marker, i) => (
          <Marker key={i} marker={marker}>
            <circle
              cx={0}
              cy={0}
              r={8}
              style={{
                fill: colors.primary,
                strokeWidth: 0,
                opacity: 2 / 3
              }}
            />
          </Marker>
        ))}
      </Markers>
    </ZoomableGroup>
  </ComposableMap>
)