/**
 * Legal copy for the Privacy Notice and Disclaimer pages, transcribed verbatim from the
 * client's documents (previously linked from the footer as Google Docs). Edit the wording here.
 */

export type LegalBlock =
  | { type: "p"; text: string; link?: { text: string; href: string } }
  | { type: "subheading"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "address"; lines: string[] };

export type LegalSection = { heading: string; blocks: LegalBlock[] };

export type LegalLanguageVersion = {
  lang: "en" | "ms";
  label: string;
  intro: LegalBlock[];
  sections: LegalSection[];
};

export const privacyNotice: LegalLanguageVersion[] = [
  {
    lang: "en",
    label: "English",
    intro: [
      {
        type: "p",
        text: "In compliance with the Personal Data Protection Act 2010 (“PDPA”) and its regulations, Katimas Properties Sdn. Bhd., and all its subsidiaries (collectively “Katimas Properties”) respects and is committed to the protection of your personal data and your privacy. This Privacy Notice explains how we collect and handle your personal data. For this written notice, any terms used herein shall have the meanings as stipulated under the PDPA."
      },
      {
        type: "p",
        text: "By providing any of your personal data to us, you explicitly consent to the collection, use and disclosure of such personal data in accordance with this Privacy Policy."
      }
    ],
    sections: [
      {
        heading: "Collection of Personal Data",
        blocks: [
          {
            type: "p",
            text: "Katimas Properties may collect, or be provided, and process personal data that relates or infers directly or indirectly to you, or any 3rd party related or associated to you, for the purpose(s) as stated in Clause 2 below."
          },
          {
            type: "p",
            text: "Such information that is personally identified or identifiable to you or any 3rd party related or associated with you, which is provided to us by you or made available to Katimas Properties, may include your personal details ( Name; national registration identity card number, other identity card numbers, passport number; gender, date of birth, age, marital status, nationality, number of dependents, race, ethnicity, religion, education, professional and/or employment information, income information), contact details, financial information, and any other relevant information that are required to provide Katimas Properties products and services to you depending on the nature of dealings or transactions, and which may be updated from time to time."
          },
          {
            type: "p",
            text: "We may collect and process data of children under the age of 18 years old, to be so obtained with parent’s or guardian’s consent. Information found to be given without consent will be deleted."
          },
          {
            type: "p",
            text: "Katimas Properties will not and is not required to verify the accuracy and completeness of the personal data provided by you, and will be entitled to treat all personal data provided as accurate, complete, non-misleading, and up-to-date."
          }
        ]
      },
      {
        heading: "How Katimas Properties Uses Your Personal Data",
        blocks: [
          {
            type: "p",
            text: "Katimas Properties may collect, use, disclose, process and retain your personal data for any or all of the following purposes:"
          },
          {
            type: "p",
            text: "As customer or potential customer – To facilitate requested commercial transaction, as required or permitted by law, including but not limited to the following:"
          },
          {
            type: "ul",
            items: [
              "to facilitate and process requested products and services;",
              "to facilitate and process, your participation in any events or activities;",
              "to facilitate and process payments in relation to requested products, services, events or activities;",
              "for internal investigations, audit, or security purposes;",
              "to facilitate and process any marketing and customer analysis, research, to provide you with better products, services, events or activities;",
              "to be accessible to Katimas Properties and Katimas Properties related companies, subsidiaries, affiliate companies, and any other third parties to provide you with better products, services, events or activities;",
              "to facilitate and process the creation, production, and provision of better products, services, events or activities, and related customer experience herein;",
              "to comply with Katimas Properties’ legal and regulatory obligations in the conduct of its business;",
              "to facilitate and process the sending of any greetings, special occasion messages, and other similar communications with you;",
              "to facilitate and process the effective presentation of accurate and complete information on our websites; and",
              "any other purposes that may be deemed fit and necessary and which will be clearly and transparently communicated to you prior to collection of information."
            ]
          },
          {
            type: "p",
            text: "As vendor, supplier, tenant or service provider – To facilitate requested commercial transaction, as requested or permitted by law, including but not limited to the following:"
          },
          {
            type: "ul",
            items: [
              "to facilitate, process, administer requested products and services;",
              "to facilitate and process the assessments of credit account application and worthiness;",
              "for internal investigations, audit, or security purposes;",
              "to comply with Katimas Properties’ legal and regulatory obligations in the conduct of its business;",
              "to facilitate and process the effective presentation of accurate and complete information into our websites; and",
              "any other purposes that may be deemed fit and necessary and which will be clearly and transparently communicated to you prior to collection of information."
            ]
          }
        ]
      },
      {
        heading: "Source of Personal Data",
        blocks: [
          {
            type: "p",
            text: "Katimas Properties may collect your personal data from any or all of the following sources, directly or indirectly:"
          },
          {
            type: "p",
            text: "For customer or potential customer – Katimas Properties collects your personal data directly from you or indirectly from individuals related or affiliated to you in order to provide you with Katimas Properties’ produce and services when you or your related parties send us such data through enquiries, applications, and/or registration forms via various means, including online, digital, and hardcopy sources at public venues, platforms, and/or in any of Katimas Properties’ premises. Your personal data may also be collected from cookies through the use of our websites."
          },
          {
            type: "p",
            text: "For vendor, supplier, tenant and service provider - Katimas Properties collects your personal data directly from you or indirectly from individuals related or affiliated to you, to facilitate and process required information when tendering for projects, when you or your related parties send us enquiries and/or credit applications from various means, including online, digital, and hardcopy sources at public venues, platforms, and/or in any of Katimas Properties’ premises. Your personal data may also be collected from cookies through the use of our websites."
          },
          {
            type: "subheading",
            text: "Obligatory Personal Information"
          },
          {
            type: "p",
            text: "All information requested for in all relevant forms is obligatory to be provided by you unless stated otherwise. Failure to provide such information will restrict and disable our ability to process and provide your requested products, services, events or activities."
          }
        ]
      },
      {
        heading: "Disclosure of Personal Data",
        blocks: [
          {
            type: "p",
            text: "Your personal data provided to us is processed by and disclosed to entities (in or outside of Malaysia) within Katimas Properties and its related companies, associated companies, and any other relevant 3rd party service providers or agents relevant for the purpose as stated in Clause 2 above. Katimas Properties will ensure that access to your personal data is restricted to staff who are contractually required to process your personal data in accordance with their respective job requirements."
          },
          {
            type: "p",
            text: "Your personal data provided to us may be disclosed to relevant third parties (in or outside of Malaysia) as required under law, with relevance to contractual or business relations, for the purpose as stated in Clause 2 above. The aforesaid relevant third parties may include, but not limited to, the following:"
          },
          {
            type: "ul",
            items: [
              "Professional advisors and/or corporate service providers;",
              "Advertising and marketing partners;",
              "Payment processors;",
              "Customer support and communication;",
              "Market research and survey;",
              "Social media platforms;",
              "Business partners and affiliates;",
              "Other service providers and entities;",
              "Law enforcement agencies;",
              "Relevant government authorities."
            ]
          },
          {
            type: "p",
            text: "You hereby permit Katimas Properties to release your personal data to all relevant parties as and when necessitated. We shall take the necessary steps to ensure all third parties are contractually bound to protect your personal data and that they can only process your personal data under our instructions."
          },
          {
            type: "p",
            text: "Where disclosures of personal data to entities outside of Malaysia are required, Katimas Properties shall ensure that the recipient of the personal data is bound by legally enforceable obligations to protect the personal data to a standard that is at least equivalent to the personal data protection standards under the laws of Malaysia."
          }
        ]
      },
      {
        heading: "Limiting the Processing of Personal Data, Withdrawing Consent, Further Enquiries and Complaints",
        blocks: [
          {
            type: "p",
            text: "If you would like to execute any or all of the following:"
          },
          {
            type: "ul",
            items: [
              "Request or obtain further information on how to limit the processing of your personal data or withdraw your consent to personal data processing;",
              "Check on accuracy, completeness and update on information given;",
              "Have any further enquiries; or",
              "To complain in respect of your personal data"
            ]
          },
          {
            type: "p",
            text: "You may contact:"
          },
          {
            type: "address",
            lines: [
              "COMPLIANCE OFFICER",
              "KATIMAS PROPERTIES SDN. BHD",
              "Level 2, Lot 33, Jalan Saradise,",
              "93350 Kuching, Sarawak",
              "Tel: +60 82 555 770",
              "Email: hello@katimasproperties.com.my"
            ]
          }
        ]
      },
      {
        heading: "Protection of Personal Data",
        blocks: [
          {
            type: "p",
            text: "Katimas Properties takes all necessary precautions to safeguard your personal data against loss, theft, misuse and unauthorised access, disclosure, usage, alteration or destruction."
          }
        ]
      },
      {
        heading: "Retention of Personal Data and Access",
        blocks: [
          {
            type: "p",
            text: "Katimas Properties will take all necessary precautions to make it easy for you to keep your information accurate, complete and up to date. We will retain your personal data for the period necessary to fulfill the purposes outlined in Clause 2 above, or as permitted or required by law."
          },
          {
            type: "p",
            text: "Katimas Properties reserve the rights to decline processing requests that are deemed impractical, inappropriate, technically challenging or not required or permissible by law."
          },
          {
            type: "p",
            text: "Katimas Properties reserves the right to update and amend this Privacy Notice from time to time. Any material changes will be posted on our website."
          }
        ]
      }
    ]
  },
  {
    lang: "ms",
    label: "Bahasa Melayu",
    intro: [
      {
        type: "p",
        text: "Selaras dengan Akta Perlindungan Data Peribadi 2010 (“PDPA”) dan peraturannya, Katimas Properties Sdn. Bhd., dan semua anak syarikatnya (secara kolektif \"Katimas Properties\") menghormati dan komited terhadap perlindungan data peribadi anda serta privasi anda. Notis Privasi ini menerangkan bagaimana kami mengumpul dan menguruskan data peribadi anda. Untuk notis bertulis ini, sebarang istilah yang digunakan di sini mempunyai maksud seperti yang ditetapkan di bawah PDPA."
      },
      {
        type: "p",
        text: "Dengan memberikan mana-mana data peribadi anda, anda sedar dan bersetuju bahawa anda telah memberikan persetujuan yang relevan untuk membenarkan Katimas Properties memproses data peribadi anda selaras dengan Polisi Data Peribadi dan Privasi Katimas Properties."
      }
    ],
    sections: [
      {
        heading: "Pengumpulan Data Peribadi",
        blocks: [
          {
            type: "p",
            text: "Katimas Properties boleh mengumpul, atau diberikan, dan memproses data peribadi yang berkaitan atau yang boleh dikaitkan secara langsung atau tidak langsung dengan anda, atau mana-mana pihak ketiga yang berkaitan atau yang berhubung dengan anda, untuk tujuan-tujuan seperti yang dinyatakan dalam Klausa 2 di bawah."
          },
          {
            type: "p",
            text: "Maklumat sedemikian yang dikenal pasti secara peribadi atau boleh dikenalpasti kepada anda atau mana-mana pihak ketiga yang berkaitan atau berhubungan dengan anda, yang diberikan kepada kami oleh anda atau disediakan kepada Katimas Properties, mungkin termasuk butiran peribadi anda (Nama, nombor kad pengenalan, nombor kad pengenalan lain, nombor pasport; jantina, tarikh lahir, umur, status perkahwinan, kewarganegaraan, bilangan tanggungan, bangsa, etnik, agama, pendidikan, maklumat profesional dan/atau pekerjaan, maklumat pendapatan), butiran hubungan, maklumat kewangan, dan sebarang maklumat lain yang berkaitan yang diperlukan untuk menyediakan produk dan perkhidmatan Katimas Properties kepada anda bergantung pada jenis urus niaga atau transaksi, dan yang mungkin dikemas kini dari semasa ke semasa."
          },
          {
            type: "p",
            text: "Kami mungkin mengumpul dan memproses data kanak-kanak di bawah umur 18 tahun, yang akan diperoleh dengan kebenaran ibu bapa atau penjaga. Maklumat yang didapati diberikan tanpa kebenaran akan dipadamkan."
          },
          {
            type: "p",
            text: "Katimas Properties tidak akan dan tidak diwajibkan untuk mengesahkan ketepatan dan kesempurnaan data peribadi yang diberikan oleh anda, dan berhak untuk menganggap semua data peribadi yang diberikan sebagai tepat, lengkap, tidak mengelirukan, dan terkini."
          }
        ]
      },
      {
        heading: "Bagaimana Katimas Properties Menggunakan Data Peribadi Anda",
        blocks: [
          {
            type: "p",
            text: "Katimas Properties boleh mengumpul, menggunakan, mendedahkan, memproses, dan menyimpan data peribadi anda untuk mana-mana atau kesemua tujuan berikut:"
          },
          {
            type: "p",
            text: "Sebagai pelanggan atau pelanggan berpotensi/bakal pelanggan – Untuk memudahkan transaksi komersial yang diminta seperti yang dikehendaki atau dibenarkan oleh undang-undang, termasuk tetapi tidak terhad kepada perkara berikut:"
          },
          {
            type: "ul",
            items: [
              "untuk memudahkan dan memproses produk dan perkhidmatan yang diminta;",
              "untuk memudahkan dan memproses penyertaan anda dalam sebarang acara atau aktiviti;",
              "untuk memudahkan dan memproses pembayaran berkaitan dengan produk, perkhidmatan, acara atau aktiviti yang diminta;",
              "untuk tujuan penyiasatan dalaman, audit atau keselamatan;",
              "untuk memudahkan dan memproses sebarang analisis pemasaran dan pelanggan, penyelidikan, bagi menyediakan anda dengan produk, perkhidmatan, acara, atau aktiviti yang lebih baik;",
              "untuk diakses oleh Katimas Properties dan syarikat berkaitan dengan Katimas Properties anak syarikat, syarikat gabungan dan mana-mana pihak ketiga lain bagi menyediakan anda dengan produk, perkhidmatan, acara, atau aktiviti yang lebih baik;",
              "untuk memudahkan dan memproses penciptaan, pengeluaran, penyediaan produk, perkhidmatan, acara, atau aktiviti yang lebih baik, dan pengalaman pelanggan yang berkaitan;",
              "untuk mematuhi kewajipan undang-undang dan peraturan dalam menjalankan perniagaannya;",
              "untuk memudahkan dan memproses penghantaran ucapan, mesej sambutan hari Istimewa, dan komunikasi-komunikasi lain yang serupa dengan anda;",
              "untuk memudahkan dan memproses penyampaian maklumat yang tepat dan lengkap secara berkesan ke dalam laman web kami; dan",
              "sebarang tujuan lain yang dianggap sesuai dan perlu serta akan disampaikan kepada anda dengan jelas dan telus sebelum pengumpulan maklumat."
            ]
          },
          {
            type: "p",
            text: "Sebagai vendor, pembekal, penyewa atau penyedia perkhidmatan – Untuk memudahkan transaksi komersial yang diminta, seperti yang dikehendaki atau dibenarkan oleh undang-undang, termasuk tetapi tidak terhad kepada perkara-perkara yang berikut:"
          },
          {
            type: "ul",
            items: [
              "untuk memudahkan, memproses, mentadbir produk dan perkhidmatan yang diminta;",
              "untuk memudahkan dan memproses penilaian permohonan dan kelayakan akaun kredit;",
              "untuk tujuan penyiasatan dalaman, audit, atau keselamatan;",
              "untuk mematuhi kewajipan undang-undang dan peraturan dalam menjalankan perniagaannya;",
              "untuk memudahkan dan memproses penyampaian maklumat yang tepat dan lengkap secara berkesan ke dalam laman web kami; dan",
              "sebarang tujuan lain yang mungkin dianggap sesuai dan perlu dan yang akan disampaikan kepada anda dengan jelas dan telus sebelum pengumpulan maklumat."
            ]
          }
        ]
      },
      {
        heading: "Sumber Data Peribadi",
        blocks: [
          {
            type: "p",
            text: "Katimas Properties boleh mengumpul data peribadi anda daripada mana-mana atau semua sumber berikut, secara langsung atau tidak langsung:"
          },
          {
            type: "p",
            text: "Untuk pelanggan atau bakal pelanggan – Katimas Properties mengumpul data peribadi anda secara langsung daripada anda atau secara tidak langsung daripada individu yang berkaitan atau berafiliasi dengan anda untuk menyediakan produk dan perkhidmatan Katimas Properties kepada anda apabila anda atau pihak berkaitan anda menghantar data tersebut kepada kami melalui pertanyaan, permohonan, dan/atau borang pendaftaran melalui pelbagai cara, termasuk sumber dalam talian, digital, dan salinan fizikal di tempat awam, platform, dan/atau di mana-mana premis Katimas Properties. Data peribadi anda juga mungkin dikumpulkan melalui cecikut semasa menggunakan laman web kami."
          },
          {
            type: "p",
            text: "Untuk vendor, pembekal, penyewa, dan penyedia perkhidmatan – Katimas Properties mengumpul data peribadi anda secara langsung daripada anda atau secara tidak langsung daripada individu yang berkaitan atau berafiliasi dengan anda, untuk memudahkan dan memproses maklumat yang diperlukan semasa tender projek, apabila anda atau pihak berkaitan dengan anda menghantar pertanyaan dan/atau permohonan kredit kepada kami melalui pelbagai cara, termasuk sumber dalam talian, digital, dan salinan fizikal di tempat awam, platform, dan/atau di mana-mana premis Katimas Properties. Data peribadi anda juga mungkin dikumpulkan melalui cecikut semasa menggunakan laman web kami."
          },
          {
            type: "subheading",
            text: "Maklumat Peribadi Wajib"
          },
          {
            type: "p",
            text: "Semua maklumat yang diminta dalam semua borang berkaitan adalah wajib untuk diberikan oleh anda melainkan dinyatakan sebaliknya. Kegagalan untuk memberikan maklumat tersebut akan menyekat dan menghalang keupayaan kami untuk memproses dan menyediakan produk, perkhidmatan, acara, atau aktiviti yang diminta oleh anda."
          }
        ]
      },
      {
        heading: "Pendedahan Data Peribadi",
        blocks: [
          {
            type: "p",
            text: "Data peribadi anda yang diberikan kepada kami diproses oleh dan didedahkan kepada entiti (di dalam atau di luar Malaysia) dalam Katimas Properties dan syarikat berkaitannya, syarikat bersekutu, serta mana-mana penyedia perkhidmatan pihak ketiga atau ejen lain yang berkaitan untuk tujuan seperti yang dinyatakan dalam Klausa 2 di atas. Katimas Properties akan memastikan bahawa akses kepada data peribadi anda dihadkan kepada kakitangan yang secara kontrak dikehendaki untuk memproses data peribadi anda selaras dengan keperluan tugas mereka."
          },
          {
            type: "p",
            text: "Data peribadi anda yang diberikan kepada kami mungkin didedahkan kepada pihak ketiga yang berkaitan (di dalam atau di luar Malaysia) seperti yang dikehendaki di bawah undang-undang, yang berkaitan dengan hubungan kontrak atau perniagaan, untuk tujuan seperti yang dinyatakan dalam Klausa 2 di atas. Pihak ketiga yang berkaitan tersebut mungkin termasuk, tetapi tidak terhad kepada, perkara berikut:"
          },
          {
            type: "ul",
            items: [
              "Penasihat profesional dan/atau penyedia perkhidmatan korporat;",
              "Rakan kongsi pengiklanan dan pemasaran;",
              "Pemproses pembayaran;",
              "Sokongan khidmat pelanggan dan komunikasi;",
              "Penyelidikan dan tinjauan pasaran;",
              "Platform media sosial;",
              "Rakan kongsi perniagaan dan sekutu;",
              "Penyedia perkhidmatan dan entiti lain;",
              "Agensi penguatkuasaan undang-undang;",
              "Pihak berkuasa kerajaan yang berkaitan."
            ]
          },
          {
            type: "p",
            text: "Anda dengan ini membenarkan Katimas Properties untuk mendedahkan data peribadi anda kepada semua pihak yang berkaitan apabila diperlukan. Kami akan mengambil langkah-langkah yang perlu untuk memastikan semua pihak ketiga terikat secara kontrak untuk melindungi data peribadi anda dan bahawa mereka hanya boleh memproses data peribadi anda di bawah arahan kami."
          },
          {
            type: "p",
            text: "Sekiranya pendedahan data peribadi kepada entiti di luar Malaysia diperlukan, Katimas Properties akan memastikan bahawa penerima data peribadi tersebut terikat dengan obligasi yang boleh dikuatkuasakan secara undang-undang untuk melindungi data peribadi tersebut mengikut standard yang sekurang-kurangnya setara dengan standard perlindungan data peribadi di bawah undang-undang Malaysia."
          }
        ]
      },
      {
        heading: "Menghadkan Pemprosesan Data Peribadi, Menarik Balik Kesetujuan, Pertanyaan Lanjutan, dan Aduan",
        blocks: [
          {
            type: "p",
            text: "Jika anda ingin melaksanakan mana-mana atau semua perkara berikut:"
          },
          {
            type: "ul",
            items: [
              "Memohon atau mendapatkan maklumat lanjut tentang cara untuk mengehadkan pemprosesan data peribadi anda atau menarik balik persetujuan anda terhadap pemprosesan data peribadi;",
              "Menyemak ketepatan, kelengkapan dan mengemas kini maklumat yang diberikan;",
              "Membuat sebarang pertanyaan lanjut; atau",
              "Membuat aduan berkenaan dengan data peribadi anda"
            ]
          },
          {
            type: "p",
            text: "Anda boleh menghubungi:"
          },
          {
            type: "address",
            lines: [
              "COMPLIANCE OFFICER",
              "KATIMAS PROPERTIES SDN. BHD",
              "Level 2, Lot 33, Jalan Saradise,",
              "93350 Kuching, Sarawak",
              "Tel: +60 82-555 770",
              "Email: hello@katimasproperties.com.my"
            ]
          }
        ]
      },
      {
        heading: "Perlindungan Data Peribadi",
        blocks: [
          {
            type: "p",
            text: "Katimas Properties mengambil semua langkah berjaga-jaga yang diperlukan untuk melindungi data peribadi anda daripada kehilangan, kecurian, penyalahgunaan dan akses tanpa kebenaran, pendedahan, penggunaan, pengubahsuaian atau pemusnahan."
          }
        ]
      },
      {
        heading: "Penyimpanan Data Peribadi dan Akses",
        blocks: [
          {
            type: "p",
            text: "Katimas Properties akan mengambil semua langkah berjaga-jaga yang diperlukan untuk memudahkan anda memastikan maklumat anda tepat, lengkap dan terkini. Kami akan menyimpan data peribadi anda untuk tempoh yang diperlukan bagi memenuhi tujuan seperti yang digariskan dalam Klausa 2 di atas, atau seperti yang dibenarkan atau dikehendaki oleh undang-undang."
          },
          {
            type: "p",
            text: "Katimas Properties berhak untuk menolak permohonan pemprosesan yang dianggap tidak praktikal, tidak sesuai, mencabar dari segi teknikal atau tidak dikehendaki atau tidak dibenarkan oleh undang-undang."
          },
          {
            type: "p",
            text: "Katimas Properties berhak untuk mengemas kini dan meminda Notis Privasi ini dari semasa ke semasa. Sebarang perubahan penting akan dipaparkan di laman web kami."
          }
        ]
      }
    ]
  }
];

export const disclaimer: { title: string; blocks: LegalBlock[] } = {
  title: "Disclaimer Notice – for Corporate Website",
  blocks: [
    {
      type: "p",
      text: "The information and materials provided on this website including but not limited to details on services, products, text, data, images, graphics, audio, video, and links are made available by Katimas Properties Sdn. Bhd. (“the Company”), a member of the Katimas Group of Companies. Where applicable, the Company works in association with KMS Maju Sdn. Bhd. in delivering its developments. Nothing on this website shall be construed as creating or implying any equity interest, ownership or control between the two companies beyond such collaboration."
    },
    {
      type: "p",
      text: "The Company makes no express or implied warranties, including but not limited to warranties of title, non-infringement, merchantability, satisfactory quality, accuracy, reliability or fitness for a particular purpose. The Company expressly disclaims any liability for errors, omissions, delays or interruptions in the website's availability or performance."
    },
    {
      type: "p",
      text: "While reasonable efforts are made to maintain the accuracy and timeliness of content, the Company does not warrant that access to this website will be uninterrupted, error-free or secure. Users are responsible for protecting their own systems and for evaluating the usefulness and appropriateness of all materials accessed."
    },
    {
      type: "p",
      text: "Any images, illustrations, artist impressions, statements, information or descriptions contained on this website are for general information purposes only and are subject to change. They shall not be construed as representations, offers, inducements or warranties (whether express or implied) by the Company, unless expressly stated in a duly executed agreement with the Company."
    },
    {
      type: "p",
      text: "The Company complies with the Personal Data Protection Act 2010 (PDPA). For details on how we handle personal data, please refer to our Privacy Policy.",
      link: {
        text: "Privacy Policy",
        href: "/privacy-notice"
      }
    },
    {
      type: "p",
      text: "Unless otherwise noted, the contents of this website, including the Company logo, the text, images, other graphics and their arrangement are copyrighted by the Company. All other associated intellectual property rights related thereto are expressly reserved by the Company."
    },
    {
      type: "p",
      text: "No permission is granted for the use of the content of this website for any reason other than for that stated in a written contract between the Company and the potential user or partner. Except for content expressly created for the purpose of redistribution, the content of this website may not be reproduced, distributed, adapted, modified, republished, displayed, broadcast, hyperlinked, framed or transmitted in any manner or by any means or stored in an information retrieval system without the prior written permission of the Company."
    }
  ]
};
