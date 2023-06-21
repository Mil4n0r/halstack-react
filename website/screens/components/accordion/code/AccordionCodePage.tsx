import {
  DxcFlex,
  DxcTable,
  DxcParagraph,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import Code from "@/common/Code";
import controlledAccordion from "./examples/controlledAccordion";
import uncontrolledAccordion from "./examples/uncontrolledAccordion";
import icons from "./examples/icons";
import controlledAccordionGroup from "./examples/controlledAccordionGroup";
import uncontrolledAccordionGroup from "./examples/uncontrolledAccordionGroup";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Default</th>
            <HeaderDescriptionCell>Description</HeaderDescriptionCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>label: string</td>
            <td></td>
            <td>The panel label.</td>
          </tr>
          <tr>
            <td>icon: node | string</td>
            <td></td>
            <td>
              Element or path used as the icon that will be placed next to panel
              label.
            </td>
          </tr>
          <tr>
            <td>assistiveText: string</td>
            <td></td>
            <td>Assistive text to be placed on the right side of the panel.</td>
          </tr>
          <tr>
            <td>disabled: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>If true, the component will be disabled.</td>
          </tr>
          <tr>
            <td>defaultIsExpanded: boolean</td>
            <td></td>
            <td>Initial state of the panel, only when it is uncontrolled.</td>
          </tr>
          <tr>
            <td>isExpanded: boolean</td>
            <td></td>
            <td>
              Represents the state of the panel. When true, the component will
              be expanded. If undefined, the component will be uncontrolled and
              its value will be managed internally by the component.
            </td>
          </tr>
          <tr>
            <td>onChange: function</td>
            <td></td>
            <td>
              This function will be called when the user clicks the accordion to
              expand or collapse the panel. The new state of the panel will be
              passed as a parameter.
            </td>
          </tr>
          <tr>
            <td>children: node</td>
            <td></td>
            <td>
              The expanded panel of the accordion. This area can be used to
              render custom content.
            </td>
          </tr>
          <tr>
            <td>margin: string | object</td>
            <td></td>
            <td>
              Size of the margin to be applied to the component ('xxsmall' |
              'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
              You can pass an object with 'top', 'bottom', 'left' and 'right'
              properties in order to specify different margin sizes.
            </td>
          </tr>
          <tr>
            <td>tabIndex: number</td>
            <td>0</td>
            <td>Value of the tabindex.</td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "Accordion Group",
    content: (
      <DxcParagraph>
        Groups two or more accordions to distribute large volumes of
        information.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Props",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Name</th>
                <th>Default</th>
                <HeaderDescriptionCell>Description</HeaderDescriptionCell>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>defaultIndexActive: number</td>
                <td></td>
                <td>
                  Initially active accordion, only when it is uncontrolled.
                </td>
              </tr>
              <tr>
                <td>indexActive: number</td>
                <td></td>
                <td>
                  The index of the active accordion. If undefined, the component
                  will be uncontrolled and the active accordion will be managed
                  internally by the component. If null, the component will be
                  controlled and all accordions will be closed.
                </td>
              </tr>
              <tr>
                <td>disabled: boolean</td>
                <td>
                  <Code>false</Code>
                </td>
                <td>If true, the component will be disabled.</td>
              </tr>
              <tr>
                <td>onActiveChange: function</td>
                <td></td>
                <td>
                  This function will be called when the user clicks on an
                  accordion. The index of the clicked accordion will be passed
                  as a parameter.
                </td>
              </tr>
              <tr>
                <td>children: DxcAccordionGroup.Accordion[]</td>
                <td></td>
                <td>Contains one or more accordions.</td>
              </tr>
              <tr>
                <td>margin: string | object</td>
                <td></td>
                <td>
                  Size of the margin to be applied to the component ('xxsmall' |
                  'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' |
                  'xxlarge'). You can pass an object with 'top', 'bottom',
                  'left' and 'right' properties in order to specify different
                  margin sizes.
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "DxcAccordionGroup.Accordion",
        content: (
          <DxcParagraph>
            Single accordion, part of an accordion group.
          </DxcParagraph>
        ),
        subSections: [
          {
            title: "Props",
            content: (
              <DxcTable>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Default</th>
                    <HeaderDescriptionCell>Description</HeaderDescriptionCell>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>label: string</td>
                    <td></td>
                    <td>The panel label.</td>
                  </tr>
                  <tr>
                    <td>icon: node | string</td>
                    <td></td>
                    <td>
                      Element or path used as the icon that will be placed next
                      to panel label.
                    </td>
                  </tr>
                  <tr>
                    <td>assistiveText: string</td>
                    <td></td>
                    <td>
                      Assistive text to be placed on the right side of the
                      panel.
                    </td>
                  </tr>
                  <tr>
                    <td>disabled: boolean</td>
                    <td>
                      <Code>false</Code>
                    </td>
                    <td>If true, the component will be disabled.</td>
                  </tr>
                  <tr>
                    <td>children: node</td>
                    <td></td>
                    <td>
                      The expanded panel of the accordion. This area can be used
                      to render custom content.
                    </td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Controlled Accordion",
        content: <Example example={controlledAccordion} defaultIsVisible />,
      },
      {
        title: "Uncontrolled Accordion",
        content: <Example example={uncontrolledAccordion} defaultIsVisible />,
      },
      {
        title: "Controlled Accordion Group",
        content: (
          <Example example={controlledAccordionGroup} defaultIsVisible />
        ),
      },
      {
        title: "Uncontrolled Accordion Group",
        content: (
          <Example example={uncontrolledAccordionGroup} defaultIsVisible />
        ),
      },
      {
        title: "Icons",
        content: <Example example={icons} defaultIsVisible />,
      },
    ],
  },
];

const AccordionUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/accordion/code/AccordionCodePage.tsx" />
    </DxcFlex>
  );
};

export default AccordionUsagePage;
