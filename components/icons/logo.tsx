import * as React from "react";
import { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={500}
    zoomAndPan="magnify"
    viewBox="0 0 375 374.999991"
    height={500}
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <defs>
      <filter x="0%" y="0%" width="100%" height="100%" id="313cba5e8e">
        <feColorMatrix
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          colorInterpolationFilters="sRGB"
        />
      </filter>
      <clipPath id="7473626550">
        <path
          d="M 86.433594 102 L 288.933594 102 L 288.933594 364 L 86.433594 364 Z M 86.433594 102 "
          clipRule="nonzero"
        />
      </clipPath>
      <clipPath id="a8a81806a8">
        <path
          d="M 0.433594 0.71875 L 202.933594 0.71875 L 202.933594 262 L 0.433594 262 Z M 0.433594 0.71875 "
          clipRule="nonzero"
        />
      </clipPath>
      <image
        x={0}
        y={0}
        width={204}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAEHCAYAAADieqkxAAAABmJLR0QA/wD/AP+gvaeTAAAC1ElEQVR4nO3TwQ3AIBDAsIP9Z666AnkhJHuCfLJm5hvgyL4dAC8xDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNA8AO5kAMM4um9bAAAAABJRU5ErkJggg=="
        id="259c80f7b4"
        height={263}
        preserveAspectRatio="xMidYMid meet"
      />
      <mask id="2882389402">
        <g filter="url(#313cba5e8e)">
          <g>
            <image
              x={0}
              y={0}
              width={204}
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAEHCAYAAADieqkxAAAABmJLR0QA/wD/AP+gvaeTAAAC1ElEQVR4nO3TwQ3AIBDAsIP9Z666AnkhJHuCfLJm5hvgyL4dAC8xDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNA8AO5kAMM4um9bAAAAABJRU5ErkJggg=="
              height={263}
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        </g>
      </mask>
      <clipPath id="477088a375">
        <rect x={0} width={203} y={0} height={262} />
      </clipPath>
      <clipPath id="ec54c9a7a9">
        <path
          d="M 0.433594 0.71875 L 202.933594 0.71875 L 202.933594 262 L 0.433594 262 Z M 0.433594 0.71875 "
          clipRule="nonzero"
        />
      </clipPath>
      <clipPath id="ac20542e4b">
        <path
          d="M 0.433594 0.71875 L 202.933594 0.71875 L 202.933594 262 L 0.433594 262 Z M 0.433594 0.71875 "
          clipRule="nonzero"
        />
      </clipPath>
      <image
        x={0}
        y={0}
        width={204}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAEHCAYAAADieqkxAAAABmJLR0QA/wD/AP+gvaeTAAAC1ElEQVR4nO3TwQ3AIBDAsIP9Z666AnkhJHuCfLJm5hvgyL4dAC8xDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNA8AO5kAMM4um9bAAAAABJRU5ErkJggg=="
        id="f8884c415b"
        height={263}
        preserveAspectRatio="xMidYMid meet"
      />
      <mask id="7af6222aa6">
        <g filter="url(#313cba5e8e)">
          <g>
            <image
              x={0}
              y={0}
              width={204}
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAEHCAYAAADieqkxAAAABmJLR0QA/wD/AP+gvaeTAAAC1ElEQVR4nO3TwQ3AIBDAsIP9Z666AnkhJHuCfLJm5hvgyL4dAC8xDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNAYBgIDAOBYSAwDASGgcAwEBgGAsNA8AO5kAMM4um9bAAAAABJRU5ErkJggg=="
              height={263}
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        </g>
      </mask>
      <clipPath id="8d62161b61">
        <path
          d="M 9 10 L 202.933594 10 L 202.933594 260 L 9 260 Z M 9 10 "
          clipRule="nonzero"
        />
      </clipPath>
      <clipPath id="f6816a45d7">
        <rect x={0} width={203} y={0} height={262} />
      </clipPath>
      <clipPath id="8ba5843733">
        <path
          d="M 0.433594 0.71875 L 202.933594 0.71875 L 202.933594 262 L 0.433594 262 Z M 0.433594 0.71875 "
          clipRule="nonzero"
        />
      </clipPath>
      <clipPath id="a27a769133">
        <path
          d="M 0.433594 0.71875 L 202.933594 0.71875 L 202.933594 262 L 0.433594 262 Z M 0.433594 0.71875 "
          clipRule="nonzero"
        />
      </clipPath>
      <clipPath id="b199ee85bb">
        <rect x={0} width={203} y={0} height={262} />
      </clipPath>
      <clipPath id="1725c36353">
        <rect x={0} width={203} y={0} height={262} />
      </clipPath>
      <mask id="d35fb03a64">
        <g filter="url(#313cba5e8e)">
          <g>
            <g clipPath="url(#1725c36353)">
              <g clipPath="url(#8ba5843733)">
                <g>
                  <g clipPath="url(#b199ee85bb)">
                    <g clipPath="url(#a27a769133)">
                      <rect
                        x={-458.372}
                        width={1119.744}
                        fill="#000000"
                        y={-474.371991}
                        height={1119.743973}
                        fillOpacity={1}
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </mask>
      <clipPath id="ebfbb4cb69">
        <path
          d="M 9 10 L 202.933594 10 L 202.933594 260 L 9 260 Z M 9 10 "
          clipRule="nonzero"
        />
      </clipPath>
      <clipPath id="968bbf4876">
        <rect x={0} width={203} y={0} height={262} />
      </clipPath>
      <clipPath id="26585756d4">
        <rect x={0} width={203} y={0} height={262} />
      </clipPath>
      <clipPath id="83d7a1fcaf">
        <rect x={0} width={203} y={0} height={262} />
      </clipPath>
      <mask id="e9298d4920">
        <g filter="url(#313cba5e8e)">
          <g>
            <g clipPath="url(#83d7a1fcaf)">
              <g clipPath="url(#ec54c9a7a9)">
                <g>
                  <g clipPath="url(#26585756d4)">
                    <g clipPath="url(#ac20542e4b)">
                      <g mask="url(#7af6222aa6)">
                        <g>
                          <g clipPath="url(#f6816a45d7)">
                            <g clipPath="url(#8d62161b61)">
                              <path
                                fill="#000000"
                                d="M 9.605469 10.167969 L 206.042969 10.167969 L 206.042969 259.953125 L 9.605469 259.953125 Z M 9.605469 10.167969 "
                                fillOpacity={1}
                                fillRule="nonzero"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                      <g mask="url(#d35fb03a64)">
                        <g>
                          <g clipPath="url(#968bbf4876)">
                            <g clipPath="url(#ebfbb4cb69)">
                              <path
                                fill="#000000"
                                d="M 9.605469 10.167969 L 206.042969 10.167969 L 206.042969 259.953125 L 9.605469 259.953125 Z M 9.605469 10.167969 "
                                fillOpacity={1}
                                fillRule="nonzero"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </mask>
      <clipPath id="21136efb05">
        <rect x={0} width={203} y={0} height={262} />
      </clipPath>
      <clipPath id="866084699f">
        <rect x={0} width={203} y={0} height={262} />
      </clipPath>
      <clipPath id="907a28602c">
        <path
          d="M 86.433594 10.75 L 269 10.75 L 269 364 L 86.433594 364 Z M 86.433594 10.75 "
          clipRule="nonzero"
        />
      </clipPath>
      <clipPath id="160f0cc967">
        <path
          d="M 0.433594 0.75 L 182.078125 0.75 L 182.078125 354 L 0.433594 354 Z M 0.433594 0.75 "
          clipRule="nonzero"
        />
      </clipPath>
      <image
        x={0}
        y={0}
        width={183}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAFiCAYAAAC06km3AAAABmJLR0QA/wD/AP+gvaeTAAADwElEQVR4nO3SwQkAIBDAsNP9ZxanEKEkE/TRNTNnIGj/DoBXzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yLsynA8IVMobsAAAAAElFTkSuQmCC"
        id="891c85fd35"
        height={354}
        preserveAspectRatio="xMidYMid meet"
      />
      <mask id="f77c6c7044">
        <g filter="url(#313cba5e8e)">
          <g transform="matrix(1, 0, 0, 1, 0, 0.000000000000001776)">
            <image
              x={0}
              y={0}
              width={183}
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAFiCAYAAAC06km3AAAABmJLR0QA/wD/AP+gvaeTAAADwElEQVR4nO3SwQkAIBDAsNP9ZxanEKEkE/TRNTNnIGj/DoBXzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yLsynA8IVMobsAAAAAElFTkSuQmCC"
              height={354}
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        </g>
      </mask>
      <clipPath id="21dc48814d">
        <path
          d="M 0.433594 7 L 160.6875 7 L 160.6875 354 L 0.433594 354 Z M 0.433594 7 "
          clipRule="nonzero"
        />
      </clipPath>
      <clipPath id="e7683b135e">
        <rect x={0} width={183} y={0} height={354} />
      </clipPath>
      <clipPath id="0580892fc1">
        <path
          d="M 0.433594 0.75 L 182.078125 0.75 L 182.078125 354 L 0.433594 354 Z M 0.433594 0.75 "
          clipRule="nonzero"
        />
      </clipPath>
      <clipPath id="f580d7d2b5">
        <path
          d="M 0.433594 0.75 L 182.078125 0.75 L 182.078125 354 L 0.433594 354 Z M 0.433594 0.75 "
          clipRule="nonzero"
        />
      </clipPath>
      <image
        x={0}
        y={0}
        width={183}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAFiCAYAAAC06km3AAAABmJLR0QA/wD/AP+gvaeTAAADwElEQVR4nO3SwQkAIBDAsNP9ZxanEKEkE/TRNTNnIGj/DoBXzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yLsynA8IVMobsAAAAAElFTkSuQmCC"
        id="87cfb0c857"
        height={354}
        preserveAspectRatio="xMidYMid meet"
      />
      <mask id="0a79833574">
        <g filter="url(#313cba5e8e)">
          <g transform="matrix(1, 0, 0, 1, 0, 0.000000000000001776)">
            <image
              x={0}
              y={0}
              width={183}
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAFiCAYAAAC06km3AAAABmJLR0QA/wD/AP+gvaeTAAADwElEQVR4nO3SwQkAIBDAsNP9ZxanEKEkE/TRNTNnIGj/DoBXzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yzE2WuckyN1nmJsvcZJmbLHOTZW6yLsynA8IVMobsAAAAAElFTkSuQmCC"
              height={354}
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        </g>
      </mask>
      <clipPath id="e384525dfd">
        <path
          d="M 0.433594 7 L 152 7 L 152 352 L 0.433594 352 Z M 0.433594 7 "
          clipRule="nonzero"
        />
      </clipPath>
      <clipPath id="1eca0f3251">
        <rect x={0} width={183} y={0} height={354} />
      </clipPath>
      <clipPath id="46cdc822fe">
        <path
          d="M 0.433594 0.75 L 182.078125 0.75 L 182.078125 354 L 0.433594 354 Z M 0.433594 0.75 "
          clipRule="nonzero"
        />
      </clipPath>
      <clipPath id="72c371cb65">
        <path
          d="M 0.433594 0.75 L 182.078125 0.75 L 182.078125 354 L 0.433594 354 Z M 0.433594 0.75 "
          clipRule="nonzero"
        />
      </clipPath>
      <clipPath id="b0c00db49e">
        <rect x={0} width={183} y={0} height={354} />
      </clipPath>
      <clipPath id="4a7384c14a">
        <rect x={0} width={183} y={0} height={354} />
      </clipPath>
      <mask id="9761b99d03">
        <g filter="url(#313cba5e8e)">
          <g>
            <g clipPath="url(#4a7384c14a)">
              <g clipPath="url(#46cdc822fe)">
                <g>
                  <g clipPath="url(#b0c00db49e)">
                    <g clipPath="url(#72c371cb65)">
                      <rect
                        x={-458.372}
                        width={1119.744}
                        fill="#000000"
                        y={-382.371991}
                        height={1119.743973}
                        fillOpacity={1}
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </mask>
      <clipPath id="ddb13f0ccc">
        <path
          d="M 0.433594 7 L 152 7 L 152 352 L 0.433594 352 Z M 0.433594 7 "
          clipRule="nonzero"
        />
      </clipPath>
      <clipPath id="416a509710">
        <rect x={0} width={183} y={0} height={354} />
      </clipPath>
      <clipPath id="99146ce3f9">
        <rect x={0} width={183} y={0} height={354} />
      </clipPath>
      <clipPath id="c4e4d1ba45">
        <rect x={0} width={183} y={0} height={354} />
      </clipPath>
      <mask id="08d8cdc51b">
        <g filter="url(#313cba5e8e)">
          <g>
            <g clipPath="url(#c4e4d1ba45)">
              <g clipPath="url(#0580892fc1)">
                <g>
                  <g clipPath="url(#99146ce3f9)">
                    <g clipPath="url(#f580d7d2b5)">
                      <g mask="url(#0a79833574)">
                        <g>
                          <g clipPath="url(#1eca0f3251)">
                            <g clipPath="url(#e384525dfd)">
                              <path
                                fill="#000000"
                                d="M -85.128906 7.460938 L 151.128906 7.460938 L 151.128906 351.582031 L -85.128906 351.582031 Z M -85.128906 7.460938 "
                                fillOpacity={1}
                                fillRule="nonzero"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                      <g mask="url(#9761b99d03)">
                        <g>
                          <g clipPath="url(#416a509710)">
                            <g clipPath="url(#ddb13f0ccc)">
                              <path
                                fill="#000000"
                                d="M -85.128906 7.460938 L 151.128906 7.460938 L 151.128906 351.582031 L -85.128906 351.582031 Z M -85.128906 7.460938 "
                                fillOpacity={1}
                                fillRule="nonzero"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </mask>
      <clipPath id="8cef5b5d7c">
        <path
          d="M 0.433594 7 L 160.6875 7 L 160.6875 354 L 0.433594 354 Z M 0.433594 7 "
          clipRule="nonzero"
        />
      </clipPath>
      <clipPath id="0bcf4fde91">
        <rect x={0} width={183} y={0} height={354} />
      </clipPath>
      <clipPath id="dabef50e49">
        <rect x={0} width={183} y={0} height={354} />
      </clipPath>
    </defs>
    <g clipPath="url(#7473626550)">
      <g transform="matrix(1, 0, 0, 1, 86, 102)">
        <g clipPath="url(#866084699f)">
          <g clipPath="url(#a8a81806a8)">
            <g mask="url(#2882389402)">
              <g>
                <g clipPath="url(#477088a375)">
                  <path
                    fill="#004aad"
                    d="M 9.605469 51.90625 L 107.027344 51.976562 C 124 52.0625 135.21875 67.832031 129.839844 83.457031 C 126.476562 93.21875 117.59375 99.3125 105.894531 99.363281 L 9.605469 99.433594 L 9.605469 141.101562 C 44.910156 141.15625 80.234375 141.191406 115.539062 141.277344 C 135.308594 141.332031 150.597656 152.402344 155.484375 169.996094 C 160.507812 188.152344 153.09375 205.285156 135.855469 215.824219 L 135.855469 259.386719 C 159.074219 256.234375 184.984375 234 193.339844 208.527344 C 206.292969 168.96875 194.011719 137.152344 161.5 112.101562 L 162.121094 110.648438 C 175.660156 88.148438 176.472656 65.707031 164.03125 43.667969 C 151.199219 20.957031 130.8125 10.222656 104.78125 10.203125 L 9.605469 10.203125 Z M 9.605469 51.90625 "
                    fillOpacity={1}
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
            <g mask="url(#e9298d4920)">
              <g>
                <g clipPath="url(#21136efb05)">
                  <path
                    fill="#004aad"
                    d="M 9.605469 51.90625 L 107.027344 51.976562 C 124 52.0625 135.21875 67.832031 129.839844 83.457031 C 126.476562 93.21875 117.59375 99.3125 105.894531 99.363281 L 9.605469 99.433594 L 9.605469 141.101562 C 44.910156 141.15625 80.234375 141.191406 115.539062 141.277344 C 135.308594 141.332031 150.597656 152.402344 155.484375 169.996094 C 160.507812 188.152344 153.09375 205.285156 135.855469 215.824219 L 135.855469 259.386719 C 159.074219 256.234375 184.984375 234 193.339844 208.527344 C 206.292969 168.96875 194.011719 137.152344 161.5 112.101562 L 162.121094 110.648438 C 175.660156 88.148438 176.472656 65.707031 164.03125 43.667969 C 151.199219 20.957031 130.8125 10.222656 104.78125 10.203125 L 9.605469 10.203125 Z M 9.605469 51.90625 "
                    fillOpacity={1}
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
    <g clipPath="url(#907a28602c)">
      <g transform="matrix(1, 0, 0, 1, 86, 10)">
        <g clipPath="url(#dabef50e49)">
          <g clipPath="url(#160f0cc967)">
            <g mask="url(#f77c6c7044)">
              <g>
                <g clipPath="url(#e7683b135e)">
                  <g clipPath="url(#21dc48814d)">
                    <path
                      fill="#004aad"
                      d="M 181.269531 603.402344 C 181.269531 651.941406 141.960938 691.289062 93.472656 691.289062 L 2.667969 691.289062 C -45.824219 691.289062 -85.128906 651.941406 -85.128906 603.402344 L -84.828125 600.871094 C -82.015625 576.511719 -73.890625 553.128906 -61.554688 531.921875 C -51.503906 514.667969 -45.523438 493 -45.523438 469.476562 C -45.523438 456.667969 -47.292969 444.425781 -50.53125 433.125 L -50.671875 432.644531 C -61.132812 395.65625 -33.398438 359.199219 4.738281 359.199219 L 27.53125 359.199219 C 27.53125 359.199219 27.53125 112.355469 27.53125 111.59375 C 27.53125 103.355469 27.832031 96.375 20.382812 94.035156 L 21.089844 80.855469 L 17.605469 80.855469 L 17.605469 85.304688 C 17.605469 86.382812 16.738281 87.25 15.65625 87.25 L 13.691406 87.25 C 10.863281 87.25 8.5625 84.964844 8.5625 82.132812 L 8.5625 76.675781 C 8.5625 73.839844 10.863281 71.539062 13.691406 71.539062 L 15.65625 71.539062 C 16.738281 71.539062 17.605469 72.40625 17.605469 73.488281 L 17.605469 77.933594 L 21.230469 77.933594 L 22.507812 54.285156 L 20.257812 54.285156 L 20.257812 58.730469 C 20.257812 59.8125 19.390625 60.679688 18.3125 60.679688 L 16.347656 60.679688 C 13.515625 60.679688 11.214844 58.375 11.214844 55.558594 L 11.214844 50.101562 C 11.214844 47.269531 13.515625 44.964844 16.347656 44.964844 L 18.3125 44.964844 C 19.390625 44.964844 20.257812 45.832031 20.257812 46.914062 L 20.257812 51.359375 L 22.664062 51.359375 L 23.941406 27.710938 L 22.347656 27.710938 L 22.347656 32.15625 C 22.347656 33.21875 21.480469 34.105469 20.398438 34.105469 L 18.4375 34.105469 C 15.605469 34.105469 13.304688 31.804688 13.304688 28.96875 L 13.304688 23.511719 C 13.304688 20.675781 15.605469 18.390625 18.4375 18.390625 L 20.398438 18.390625 C 21.480469 18.390625 22.347656 19.261719 22.347656 20.339844 L 22.347656 24.789062 L 24.082031 24.789062 L 24.59375 15.203125 C 24.824219 10.863281 28.398438 7.480469 32.734375 7.480469 L 63.386719 7.480469 C 67.722656 7.480469 71.296875 10.882812 71.546875 15.203125 L 72.058594 24.789062 L 73.792969 24.789062 L 73.792969 20.339844 C 73.792969 19.261719 74.660156 18.390625 75.738281 18.390625 L 77.703125 18.390625 C 80.535156 18.390625 82.835938 20.675781 82.835938 23.511719 L 82.835938 28.96875 C 82.835938 31.804688 80.535156 34.105469 77.703125 34.105469 L 75.738281 34.105469 C 74.660156 34.105469 73.792969 33.238281 73.792969 32.15625 L 73.792969 27.710938 L 72.199219 27.710938 L 73.472656 51.359375 L 75.882812 51.359375 L 75.882812 46.914062 C 75.882812 45.832031 76.75 44.964844 77.828125 44.964844 L 79.792969 44.964844 C 82.625 44.964844 84.925781 47.269531 84.925781 50.101562 L 84.925781 55.558594 C 84.925781 58.394531 82.625 60.679688 79.792969 60.679688 L 77.828125 60.679688 C 76.75 60.679688 75.882812 59.8125 75.882812 58.730469 L 75.882812 54.285156 L 73.632812 54.285156 L 74.90625 77.933594 L 78.535156 77.933594 L 78.535156 73.488281 C 78.535156 72.425781 79.402344 71.539062 80.484375 71.539062 L 82.445312 71.539062 C 85.277344 71.539062 87.578125 73.839844 87.578125 76.675781 L 87.578125 82.132812 C 87.578125 84.964844 85.277344 87.25 82.445312 87.25 L 80.484375 87.25 C 79.402344 87.25 78.535156 86.382812 78.535156 85.304688 L 78.535156 80.855469 L 75.050781 80.855469 L 75.757812 94.035156 C 68.308594 96.394531 68.609375 103.355469 68.609375 111.59375 C 68.609375 112.371094 68.609375 359.199219 68.609375 359.199219 L 91.402344 359.199219 C 129.539062 359.199219 157.269531 395.675781 146.882812 432.414062 L 146.742188 432.894531 C 143.433594 444.425781 141.660156 456.667969 141.660156 469.476562 C 141.660156 493 147.644531 514.667969 157.695312 531.921875 C 170.03125 553.109375 178.152344 576.492188 180.96875 600.871094 L 181.25 603.402344 "
                      fillOpacity={1}
                      fillRule="nonzero"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g mask="url(#08d8cdc51b)">
              <g>
                <g clipPath="url(#0bcf4fde91)">
                  <g clipPath="url(#8cef5b5d7c)">
                    <path
                      fill="#004aad"
                      d="M 181.269531 603.402344 C 181.269531 651.941406 141.960938 691.289062 93.472656 691.289062 L 2.667969 691.289062 C -45.824219 691.289062 -85.128906 651.941406 -85.128906 603.402344 L -84.828125 600.871094 C -82.015625 576.511719 -73.890625 553.128906 -61.554688 531.921875 C -51.503906 514.667969 -45.523438 493 -45.523438 469.476562 C -45.523438 456.667969 -47.292969 444.425781 -50.53125 433.125 L -50.671875 432.644531 C -61.132812 395.65625 -33.398438 359.199219 4.738281 359.199219 L 27.53125 359.199219 C 27.53125 359.199219 27.53125 112.355469 27.53125 111.59375 C 27.53125 103.355469 27.832031 96.375 20.382812 94.035156 L 21.089844 80.855469 L 17.605469 80.855469 L 17.605469 85.304688 C 17.605469 86.382812 16.738281 87.25 15.65625 87.25 L 13.691406 87.25 C 10.863281 87.25 8.5625 84.964844 8.5625 82.132812 L 8.5625 76.675781 C 8.5625 73.839844 10.863281 71.539062 13.691406 71.539062 L 15.65625 71.539062 C 16.738281 71.539062 17.605469 72.40625 17.605469 73.488281 L 17.605469 77.933594 L 21.230469 77.933594 L 22.507812 54.285156 L 20.257812 54.285156 L 20.257812 58.730469 C 20.257812 59.8125 19.390625 60.679688 18.3125 60.679688 L 16.347656 60.679688 C 13.515625 60.679688 11.214844 58.375 11.214844 55.558594 L 11.214844 50.101562 C 11.214844 47.269531 13.515625 44.964844 16.347656 44.964844 L 18.3125 44.964844 C 19.390625 44.964844 20.257812 45.832031 20.257812 46.914062 L 20.257812 51.359375 L 22.664062 51.359375 L 23.941406 27.710938 L 22.347656 27.710938 L 22.347656 32.15625 C 22.347656 33.21875 21.480469 34.105469 20.398438 34.105469 L 18.4375 34.105469 C 15.605469 34.105469 13.304688 31.804688 13.304688 28.96875 L 13.304688 23.511719 C 13.304688 20.675781 15.605469 18.390625 18.4375 18.390625 L 20.398438 18.390625 C 21.480469 18.390625 22.347656 19.261719 22.347656 20.339844 L 22.347656 24.789062 L 24.082031 24.789062 L 24.59375 15.203125 C 24.824219 10.863281 28.398438 7.480469 32.734375 7.480469 L 63.386719 7.480469 C 67.722656 7.480469 71.296875 10.882812 71.546875 15.203125 L 72.058594 24.789062 L 73.792969 24.789062 L 73.792969 20.339844 C 73.792969 19.261719 74.660156 18.390625 75.738281 18.390625 L 77.703125 18.390625 C 80.535156 18.390625 82.835938 20.675781 82.835938 23.511719 L 82.835938 28.96875 C 82.835938 31.804688 80.535156 34.105469 77.703125 34.105469 L 75.738281 34.105469 C 74.660156 34.105469 73.792969 33.238281 73.792969 32.15625 L 73.792969 27.710938 L 72.199219 27.710938 L 73.472656 51.359375 L 75.882812 51.359375 L 75.882812 46.914062 C 75.882812 45.832031 76.75 44.964844 77.828125 44.964844 L 79.792969 44.964844 C 82.625 44.964844 84.925781 47.269531 84.925781 50.101562 L 84.925781 55.558594 C 84.925781 58.394531 82.625 60.679688 79.792969 60.679688 L 77.828125 60.679688 C 76.75 60.679688 75.882812 59.8125 75.882812 58.730469 L 75.882812 54.285156 L 73.632812 54.285156 L 74.90625 77.933594 L 78.535156 77.933594 L 78.535156 73.488281 C 78.535156 72.425781 79.402344 71.539062 80.484375 71.539062 L 82.445312 71.539062 C 85.277344 71.539062 87.578125 73.839844 87.578125 76.675781 L 87.578125 82.132812 C 87.578125 84.964844 85.277344 87.25 82.445312 87.25 L 80.484375 87.25 C 79.402344 87.25 78.535156 86.382812 78.535156 85.304688 L 78.535156 80.855469 L 75.050781 80.855469 L 75.757812 94.035156 C 68.308594 96.394531 68.609375 103.355469 68.609375 111.59375 C 68.609375 112.371094 68.609375 359.199219 68.609375 359.199219 L 91.402344 359.199219 C 129.539062 359.199219 157.269531 395.675781 146.882812 432.414062 L 146.742188 432.894531 C 143.433594 444.425781 141.660156 456.667969 141.660156 469.476562 C 141.660156 493 147.644531 514.667969 157.695312 531.921875 C 170.03125 553.109375 178.152344 576.492188 180.96875 600.871094 L 181.25 603.402344 "
                      fillOpacity={1}
                      fillRule="nonzero"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
export default SVGComponent;
