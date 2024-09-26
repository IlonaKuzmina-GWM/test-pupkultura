import { gql } from '@apollo/client';

export const GET_DYNAMIC_HOMEPAGE_DATA = gql`
query GetHomePageData($locale: LanguageCodeFilterEnum!) {
    pages(where: { language: $locale }) {
      edges {
        node {
          title
          dynamicFields {
            videoSection {
              shareBtnText
              shareIconsTitle
              videoLink
              videoSectionTitle
            }
            partnersSectionTitle
            heroSection {
              heroContent
              heroTitle
            }
            footer {
              contacts {
                telnr
                title
                email
              }
              companyRequisite {
                fieldGroupName
                title
              }
              bankAcountRequisites {
                title
                content
              }
              adress {
                title
                content
              }
            }
            donateSection {
              donatePrices {
                donateBtn
                donateClass
              }
            }
            cloudsContent {
              shareButton {
                buttonTitle
              }
              cloud {
                cloudContent
                cloudTitle
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PARTNERS_DATA = gql`
query GetParnersData {
  pages {
    edges {
      node {
        staticPageContent {
          ourPartners {
            edges {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
}
`;

export const GET_FOOTER_DATA = gql`
query GetHomePageData {
    pages {
      edges {
        node {
          staticPageContent {
            footerSocialLinks {
              socialLink {
                link
                icon {
                  node {
                    mediaItemUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;