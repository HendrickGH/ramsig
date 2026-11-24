"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Surface } from "@/design-system/Primitives";
import type {
  CONTACT_SECTION_COPY,
  ContactInfo,
  PrivacyNotice,
  QuoteFormConfig,
  RecruitmentFormConfig,
} from "@/design-system/services";
import { FORM_UI_COPY } from "@/design-system/services";
import type { SectorId, ServiceId } from "@/design-system/tokens";
import { Button } from "../atoms/Button";
import { Eyebrow } from "../atoms/Eyebrow";
import { Heading } from "../atoms/Heading";
import { TacticalIcon } from "../atoms/TacticalIcon";
import { ContactChannelItem } from "../molecules/ContactChannelItem";
import { FormField } from "../molecules/FormField";

type BriefTab = "quote" | "recruitment";

interface QuoteFormValues {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  sector: string;
  state: string;
  details: string;
  privacyConsent: boolean;
}

interface RecruitmentFormValues {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  office: string;
  experience: string;
  privacyConsent: boolean;
}

interface SubmittedDossier {
  kind: BriefTab;
  folio: string;
  eyebrow: string;
  title: string;
  body: string;
  resetLabel: string;
  rows: readonly { label: string; value: string }[];
}

export interface QuoteBriefSectionProps {
  sectionCopy: typeof CONTACT_SECTION_COPY;
  contactInfo: ContactInfo;
  privacyNotice: PrivacyNotice;
  quoteConfig: QuoteFormConfig;
  recruitmentConfig: RecruitmentFormConfig;
  preselectedService?: ServiceId;
  preselectedSector?: SectorId;
  selectionVersion?: number;
  onOpenPrivacy?: () => void;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function QuoteBriefSection({
  sectionCopy,
  contactInfo,
  privacyNotice,
  quoteConfig,
  recruitmentConfig,
  preselectedService,
  preselectedSector,
  selectionVersion = 0,
  onOpenPrivacy,
}: QuoteBriefSectionProps) {
  const [activeTab, setActiveTab] = useState<BriefTab>("quote");
  const [submissionSeq, setSubmissionSeq] = useState(1);
  const [showPrefillNotice, setShowPrefillNotice] = useState(false);
  const [submittedDossier, setSubmittedDossier] =
    useState<SubmittedDossier | null>(null);

  const [quoteValues, setQuoteValues] = useState<QuoteFormValues>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: preselectedService ?? quoteConfig.fields.service.options[0]?.value ?? "guardias",
    sector: preselectedSector ?? quoteConfig.fields.sector.options[0]?.value ?? "industria",
    state: quoteConfig.fields.state.options[0]?.value ?? "Estado de México",
    details: "",
    privacyConsent: false,
  });

  const [quoteErrors, setQuoteErrors] = useState<
    Partial<Record<keyof QuoteFormValues, string>>
  >({});

  const [recruitmentValues, setRecruitmentValues] =
    useState<RecruitmentFormValues>({
      fullName: "",
      email: "",
      phone: "",
      position:
        recruitmentConfig.fields.position.options[0]?.value ??
        "Guardia Intramuros",
      office:
        recruitmentConfig.fields.office.options[0]?.value ??
        "Estado de México (Naucalpan)",
      experience: "",
      privacyConsent: false,
    });

  const [recruitmentErrors, setRecruitmentErrors] = useState<
    Partial<Record<keyof RecruitmentFormValues, string>>
  >({});

  useEffect(() => {
    if (selectionVersion <= 0) {
      return;
    }

    setActiveTab("quote");
    setSubmittedDossier(null);
    setQuoteErrors({});
    setShowPrefillNotice(true);
    setQuoteValues((prev) => ({
      ...prev,
      service: preselectedService ?? prev.service,
      sector: preselectedSector ?? prev.sector,
    }));
  }, [preselectedService, preselectedSector, selectionVersion]);

  const handleTabSwitch = (tab: BriefTab) => {
    setActiveTab(tab);
    setSubmittedDossier(null);
  };

  const buildFolio = (prefix: string, seedText: string) => {
    const code = String(
      1000 + ((submissionSeq * 137 + seedText.trim().length * 43) % 9000)
    ).padStart(4, "0");
    return `${prefix}-${code}`;
  };

  const handleQuoteSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof QuoteFormValues, string>> = {};
    if (!quoteValues.fullName.trim()) {
      nextErrors.fullName = quoteConfig.fields.fullName.requiredMessage;
    }
    if (!quoteValues.company.trim()) {
      nextErrors.company = quoteConfig.fields.company.requiredMessage;
    }
    if (!quoteValues.email.trim()) {
      nextErrors.email = quoteConfig.fields.email.requiredMessage;
    } else if (!EMAIL_PATTERN.test(quoteValues.email.trim())) {
      nextErrors.email = quoteConfig.fields.email.invalidMessage;
    }
    if (!quoteValues.phone.trim()) {
      nextErrors.phone = quoteConfig.fields.phone.requiredMessage;
    }
    if (!quoteValues.privacyConsent) {
      nextErrors.privacyConsent =
        quoteConfig.fields.privacyConsent.requiredMessage;
    }

    setQuoteErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const serviceLabel =
      quoteConfig.fields.service.options.find(
        (option) => option.value === quoteValues.service
      )?.label ?? quoteValues.service;

    const sectorLabel =
      quoteConfig.fields.sector.options.find(
        (option) => option.value === quoteValues.sector
      )?.label ?? quoteValues.sector;

    const folio = buildFolio(quoteConfig.folioPrefix, quoteValues.company);
    setSubmissionSeq((prev) => prev + 1);
    setSubmittedDossier({
      kind: "quote",
      folio,
      eyebrow: FORM_UI_COPY.quoteConfirmationEyebrow,
      title: quoteConfig.confirmationTitle,
      body: quoteConfig.confirmationBody,
      resetLabel: quoteConfig.resetLabel,
      rows: [
        { label: FORM_UI_COPY.summaryLabels.fullName, value: quoteValues.fullName.trim() },
        { label: FORM_UI_COPY.summaryLabels.company, value: quoteValues.company.trim() },
        { label: FORM_UI_COPY.summaryLabels.email, value: quoteValues.email.trim() },
        { label: FORM_UI_COPY.summaryLabels.phone, value: quoteValues.phone.trim() },
        { label: FORM_UI_COPY.summaryLabels.service, value: serviceLabel },
        { label: FORM_UI_COPY.summaryLabels.sector, value: sectorLabel },
        { label: FORM_UI_COPY.summaryLabels.state, value: quoteValues.state },
        {
          label: FORM_UI_COPY.summaryLabels.details,
          value: quoteValues.details.trim() || FORM_UI_COPY.noDetailsFallback,
        },
      ],
    });
  };

  const handleRecruitmentSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof RecruitmentFormValues, string>> = {};
    if (!recruitmentValues.fullName.trim()) {
      nextErrors.fullName = recruitmentConfig.fields.fullName.requiredMessage;
    }
    if (!recruitmentValues.email.trim()) {
      nextErrors.email = recruitmentConfig.fields.email.requiredMessage;
    } else if (!EMAIL_PATTERN.test(recruitmentValues.email.trim())) {
      nextErrors.email = recruitmentConfig.fields.email.invalidMessage;
    }
    if (!recruitmentValues.phone.trim()) {
      nextErrors.phone = recruitmentConfig.fields.phone.requiredMessage;
    }
    if (!recruitmentValues.privacyConsent) {
      nextErrors.privacyConsent =
        recruitmentConfig.fields.privacyConsent.requiredMessage;
    }

    setRecruitmentErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const folio = buildFolio(
      recruitmentConfig.folioPrefix,
      recruitmentValues.fullName
    );
    setSubmissionSeq((prev) => prev + 1);
    setSubmittedDossier({
      kind: "recruitment",
      folio,
      eyebrow: FORM_UI_COPY.recruitmentConfirmationEyebrow,
      title: recruitmentConfig.confirmationTitle,
      body: recruitmentConfig.confirmationBody,
      resetLabel: recruitmentConfig.resetLabel,
      rows: [
        {
          label: FORM_UI_COPY.summaryLabels.fullName,
          value: recruitmentValues.fullName.trim(),
        },
        {
          label: FORM_UI_COPY.summaryLabels.email,
          value: recruitmentValues.email.trim(),
        },
        {
          label: FORM_UI_COPY.summaryLabels.phone,
          value: recruitmentValues.phone.trim(),
        },
        {
          label: FORM_UI_COPY.summaryLabels.position,
          value: recruitmentValues.position,
        },
        {
          label: FORM_UI_COPY.summaryLabels.office,
          value: recruitmentValues.office,
        },
        {
          label: FORM_UI_COPY.summaryLabels.experience,
          value:
            recruitmentValues.experience.trim() ||
            FORM_UI_COPY.noDetailsFallback,
        },
      ],
    });
  };

  const handleResetDossier = () => {
    if (submittedDossier?.kind === "quote") {
      setQuoteValues((prev) => ({
        ...prev,
        fullName: "",
        company: "",
        email: "",
        phone: "",
        details: "",
        privacyConsent: false,
      }));
      setQuoteErrors({});
    } else {
      setRecruitmentValues((prev) => ({
        ...prev,
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        privacyConsent: false,
      }));
      setRecruitmentErrors({});
    }
    setSubmittedDossier(null);
  };

  const isQuoteActive = activeTab === "quote";

  return (
    <Surface as="section" level={1} id="contacto" className="section-band">
      <div className="container-capsule section-block">
        <div className="section-intro">
          <Eyebrow index={sectionCopy.eyebrowIndex}>
            {sectionCopy.eyebrowLabel}
          </Eyebrow>
          <Heading as="h2" size="section" tone="primary">
            {sectionCopy.title}
          </Heading>
          <p className="lead-copy">{sectionCopy.subtitle}</p>
        </div>

        <div className="capsule-grid-asymmetric">
          <Surface level={1} radius="md" className="quote-form-panel">
            <Surface
              level={2}
              radius="pill"
              role="tablist"
              aria-label={FORM_UI_COPY.tabsAriaLabel}
              className="form-tabs"
            >
              <button
                id="brief-tab-quote"
                type="button"
                role="tab"
                aria-selected={isQuoteActive}
                aria-controls="brief-panel-quote"
                className={[
                  "form-tab",
                  isQuoteActive ? "form-tab--active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => handleTabSwitch("quote")}
              >
                {quoteConfig.tabLabel}
              </button>
              <button
                id="brief-tab-recruitment"
                type="button"
                role="tab"
                aria-selected={!isQuoteActive}
                aria-controls="brief-panel-recruitment"
                className={[
                  "form-tab",
                  !isQuoteActive ? "form-tab--active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => handleTabSwitch("recruitment")}
              >
                {recruitmentConfig.tabLabel}
              </button>
            </Surface>

            {submittedDossier ? (
              <Surface
                level={0}
                radius="md"
                role="status"
                aria-live="polite"
                className="dossier-confirmation"
              >
                <Eyebrow tone="gold">{submittedDossier.eyebrow}</Eyebrow>

                <Heading as="h3" size="card" tone="primary">
                  {submittedDossier.title}
                </Heading>

                <div className="dossier-confirmation__folio">
                  <span className="dossier-confirmation__folio-label">
                    {FORM_UI_COPY.folioLabel}
                  </span>
                  <span className="dossier-confirmation__folio-code">
                    {submittedDossier.folio}
                  </span>
                </div>

                <p className="body-copy">{submittedDossier.body}</p>

                <p className="service-pillar-card__meta">
                  {FORM_UI_COPY.summaryHeading}
                </p>

                <div className="dossier-confirmation__summary">
                  {submittedDossier.rows.map((row) => (
                    <div key={row.label} className="dossier-confirmation__row">
                      <span className="dossier-confirmation__key">
                        {row.label}
                      </span>
                      <span className="dossier-confirmation__val">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={handleResetDossier}
                  >
                    {submittedDossier.resetLabel}
                  </Button>
                </div>
              </Surface>
            ) : isQuoteActive ? (
              <div
                id="brief-panel-quote"
                role="tabpanel"
                aria-labelledby="brief-tab-quote"
                className="form-stack"
              >
                <Heading as="h3" size="card" tone="primary">
                  {quoteConfig.heading}
                </Heading>
                <p className="body-copy">{quoteConfig.subtitle}</p>

                {showPrefillNotice ? (
                  <p className="prefill-banner">
                    <TacticalIcon name="check" size={14} />
                    <span>{FORM_UI_COPY.prefillBadgeLabel}</span>
                  </p>
                ) : null}

                <form
                  noValidate
                  onSubmit={handleQuoteSubmit}
                  className="form-stack"
                >
                  <div className="form-grid-2">
                    <FormField
                      id="quote-full-name"
                      name="fullName"
                      kind="text"
                      label={quoteConfig.fields.fullName.label}
                      placeholder={quoteConfig.fields.fullName.placeholder}
                      value={quoteValues.fullName}
                      onChange={(value) => {
                        setQuoteValues((prev) => ({ ...prev, fullName: value }));
                        if (quoteErrors.fullName) {
                          setQuoteErrors((prev) => ({
                            ...prev,
                            fullName: undefined,
                          }));
                        }
                      }}
                      required
                      autoComplete="name"
                      error={quoteErrors.fullName}
                    />

                    <FormField
                      id="quote-company"
                      name="company"
                      kind="text"
                      label={quoteConfig.fields.company.label}
                      placeholder={quoteConfig.fields.company.placeholder}
                      value={quoteValues.company}
                      onChange={(value) => {
                        setQuoteValues((prev) => ({ ...prev, company: value }));
                        if (quoteErrors.company) {
                          setQuoteErrors((prev) => ({
                            ...prev,
                            company: undefined,
                          }));
                        }
                      }}
                      required
                      autoComplete="organization"
                      error={quoteErrors.company}
                    />
                  </div>

                  <div className="form-grid-2">
                    <FormField
                      id="quote-email"
                      name="email"
                      kind="email"
                      label={quoteConfig.fields.email.label}
                      placeholder={quoteConfig.fields.email.placeholder}
                      value={quoteValues.email}
                      onChange={(value) => {
                        setQuoteValues((prev) => ({ ...prev, email: value }));
                        if (quoteErrors.email) {
                          setQuoteErrors((prev) => ({
                            ...prev,
                            email: undefined,
                          }));
                        }
                      }}
                      required
                      autoComplete="email"
                      error={quoteErrors.email}
                    />

                    <FormField
                      id="quote-phone"
                      name="phone"
                      kind="tel"
                      label={quoteConfig.fields.phone.label}
                      placeholder={quoteConfig.fields.phone.placeholder}
                      value={quoteValues.phone}
                      onChange={(value) => {
                        setQuoteValues((prev) => ({ ...prev, phone: value }));
                        if (quoteErrors.phone) {
                          setQuoteErrors((prev) => ({
                            ...prev,
                            phone: undefined,
                          }));
                        }
                      }}
                      required
                      autoComplete="tel"
                      error={quoteErrors.phone}
                    />
                  </div>

                  <div className="form-grid-2">
                    <FormField
                      id="quote-service"
                      name="service"
                      kind="select"
                      label={quoteConfig.fields.service.label}
                      value={quoteValues.service}
                      options={quoteConfig.fields.service.options}
                      onChange={(value) =>
                        setQuoteValues((prev) => ({ ...prev, service: value }))
                      }
                      required
                    />

                    <FormField
                      id="quote-sector"
                      name="sector"
                      kind="select"
                      label={quoteConfig.fields.sector.label}
                      value={quoteValues.sector}
                      options={quoteConfig.fields.sector.options}
                      onChange={(value) =>
                        setQuoteValues((prev) => ({ ...prev, sector: value }))
                      }
                      required
                    />
                  </div>

                  <FormField
                    id="quote-state"
                    name="state"
                    kind="select"
                    label={quoteConfig.fields.state.label}
                    value={quoteValues.state}
                    options={quoteConfig.fields.state.options}
                    onChange={(value) =>
                      setQuoteValues((prev) => ({ ...prev, state: value }))
                    }
                    required
                  />

                  <FormField
                    id="quote-details"
                    name="details"
                    kind="textarea"
                    label={quoteConfig.fields.details.label}
                    placeholder={quoteConfig.fields.details.placeholder}
                    value={quoteValues.details}
                    onChange={(value) =>
                      setQuoteValues((prev) => ({ ...prev, details: value }))
                    }
                  />

                  <div className="consent-block">
                    <label
                      htmlFor="quote-privacy-consent"
                      className="consent-checkbox"
                    >
                      <input
                        id="quote-privacy-consent"
                        name="privacyConsent"
                        type="checkbox"
                        checked={quoteValues.privacyConsent}
                        onChange={(event) => {
                          const checked = event.target.checked;
                          setQuoteValues((prev) => ({
                            ...prev,
                            privacyConsent: checked,
                          }));
                          if (quoteErrors.privacyConsent) {
                            setQuoteErrors((prev) => ({
                              ...prev,
                              privacyConsent: undefined,
                            }));
                          }
                        }}
                        aria-invalid={Boolean(quoteErrors.privacyConsent)}
                        aria-describedby={
                          quoteErrors.privacyConsent
                            ? "quote-privacy-consent-error"
                            : undefined
                        }
                        className="consent-checkbox__input"
                      />
                      <span className="consent-checkbox__box" aria-hidden="true">
                        {quoteValues.privacyConsent ? (
                          <TacticalIcon name="check" size={14} />
                        ) : null}
                      </span>
                      <span className="consent-checkbox__text">
                        {privacyNotice.consentLabel}
                      </span>
                    </label>

                    {onOpenPrivacy ? (
                      <button
                        type="button"
                        className="consent-privacy-link"
                        onClick={onOpenPrivacy}
                      >
                        {FORM_UI_COPY.privacyTriggerLabel}
                      </button>
                    ) : null}

                    {quoteErrors.privacyConsent ? (
                      <p
                        id="quote-privacy-consent-error"
                        className="form-field__error"
                        role="alert"
                      >
                        {quoteErrors.privacyConsent}
                      </p>
                    ) : null}
                  </div>

                  <Button type="submit" variant="primary" size="lg" fullWidth>
                    <span>{quoteConfig.submitLabel}</span>
                    <TacticalIcon name="arrow-right" size={18} />
                  </Button>
                </form>
              </div>
            ) : (
              <div
                id="brief-panel-recruitment"
                role="tabpanel"
                aria-labelledby="brief-tab-recruitment"
                className="form-stack"
              >
                <Heading as="h3" size="card" tone="primary">
                  {recruitmentConfig.heading}
                </Heading>
                <p className="body-copy">{recruitmentConfig.subtitle}</p>

                <form
                  noValidate
                  onSubmit={handleRecruitmentSubmit}
                  className="form-stack"
                >
                  <FormField
                    id="recruitment-full-name"
                    name="fullName"
                    kind="text"
                    label={recruitmentConfig.fields.fullName.label}
                    placeholder={recruitmentConfig.fields.fullName.placeholder}
                    value={recruitmentValues.fullName}
                    onChange={(value) => {
                      setRecruitmentValues((prev) => ({
                        ...prev,
                        fullName: value,
                      }));
                      if (recruitmentErrors.fullName) {
                        setRecruitmentErrors((prev) => ({
                          ...prev,
                          fullName: undefined,
                        }));
                      }
                    }}
                    required
                    autoComplete="name"
                    error={recruitmentErrors.fullName}
                  />

                  <div className="form-grid-2">
                    <FormField
                      id="recruitment-email"
                      name="email"
                      kind="email"
                      label={recruitmentConfig.fields.email.label}
                      placeholder={recruitmentConfig.fields.email.placeholder}
                      value={recruitmentValues.email}
                      onChange={(value) => {
                        setRecruitmentValues((prev) => ({
                          ...prev,
                          email: value,
                        }));
                        if (recruitmentErrors.email) {
                          setRecruitmentErrors((prev) => ({
                            ...prev,
                            email: undefined,
                          }));
                        }
                      }}
                      required
                      autoComplete="email"
                      error={recruitmentErrors.email}
                    />

                    <FormField
                      id="recruitment-phone"
                      name="phone"
                      kind="tel"
                      label={recruitmentConfig.fields.phone.label}
                      placeholder={recruitmentConfig.fields.phone.placeholder}
                      value={recruitmentValues.phone}
                      onChange={(value) => {
                        setRecruitmentValues((prev) => ({
                          ...prev,
                          phone: value,
                        }));
                        if (recruitmentErrors.phone) {
                          setRecruitmentErrors((prev) => ({
                            ...prev,
                            phone: undefined,
                          }));
                        }
                      }}
                      required
                      autoComplete="tel"
                      error={recruitmentErrors.phone}
                    />
                  </div>

                  <div className="form-grid-2">
                    <FormField
                      id="recruitment-position"
                      name="position"
                      kind="select"
                      label={recruitmentConfig.fields.position.label}
                      value={recruitmentValues.position}
                      options={recruitmentConfig.fields.position.options}
                      onChange={(value) =>
                        setRecruitmentValues((prev) => ({
                          ...prev,
                          position: value,
                        }))
                      }
                      required
                    />

                    <FormField
                      id="recruitment-office"
                      name="office"
                      kind="select"
                      label={recruitmentConfig.fields.office.label}
                      value={recruitmentValues.office}
                      options={recruitmentConfig.fields.office.options}
                      onChange={(value) =>
                        setRecruitmentValues((prev) => ({
                          ...prev,
                          office: value,
                        }))
                      }
                      required
                    />
                  </div>

                  <FormField
                    id="recruitment-experience"
                    name="experience"
                    kind="textarea"
                    label={recruitmentConfig.fields.experience.label}
                    placeholder={
                      recruitmentConfig.fields.experience.placeholder
                    }
                    value={recruitmentValues.experience}
                    onChange={(value) =>
                      setRecruitmentValues((prev) => ({
                        ...prev,
                        experience: value,
                      }))
                    }
                  />

                  <div className="consent-block">
                    <label
                      htmlFor="recruitment-privacy-consent"
                      className="consent-checkbox"
                    >
                      <input
                        id="recruitment-privacy-consent"
                        name="privacyConsent"
                        type="checkbox"
                        checked={recruitmentValues.privacyConsent}
                        onChange={(event) => {
                          const checked = event.target.checked;
                          setRecruitmentValues((prev) => ({
                            ...prev,
                            privacyConsent: checked,
                          }));
                          if (recruitmentErrors.privacyConsent) {
                            setRecruitmentErrors((prev) => ({
                              ...prev,
                              privacyConsent: undefined,
                            }));
                          }
                        }}
                        aria-invalid={Boolean(recruitmentErrors.privacyConsent)}
                        aria-describedby={
                          recruitmentErrors.privacyConsent
                            ? "recruitment-privacy-consent-error"
                            : undefined
                        }
                        className="consent-checkbox__input"
                      />
                      <span className="consent-checkbox__box" aria-hidden="true">
                        {recruitmentValues.privacyConsent ? (
                          <TacticalIcon name="check" size={14} />
                        ) : null}
                      </span>
                      <span className="consent-checkbox__text">
                        {privacyNotice.consentLabel}
                      </span>
                    </label>

                    {onOpenPrivacy ? (
                      <button
                        type="button"
                        className="consent-privacy-link"
                        onClick={onOpenPrivacy}
                      >
                        {FORM_UI_COPY.privacyTriggerLabel}
                      </button>
                    ) : null}

                    {recruitmentErrors.privacyConsent ? (
                      <p
                        id="recruitment-privacy-consent-error"
                        className="form-field__error"
                        role="alert"
                      >
                        {recruitmentErrors.privacyConsent}
                      </p>
                    ) : null}
                  </div>

                  <Button type="submit" variant="primary" size="lg" fullWidth>
                    <span>{recruitmentConfig.submitLabel}</span>
                    <TacticalIcon name="arrow-right" size={18} />
                  </Button>
                </form>
              </div>
            )}
          </Surface>

          <div className="quote-channels-col">
            <Heading as="h3" size="card" tone="primary">
              {sectionCopy.channelsHeading}
            </Heading>

            <ContactChannelItem
              label={contactInfo.addressLabel}
              value={contactInfo.addressFull}
              iconName="map-pin"
              surfaceLevel={2}
            />

            <ContactChannelItem
              label={contactInfo.phoneLabel}
              value={contactInfo.phoneDisplay}
              href={contactInfo.phoneHref}
              iconName="phone"
              surfaceLevel={2}
            />

            <ContactChannelItem
              label={contactInfo.whatsappLabel}
              value={contactInfo.whatsappDisplay}
              href={contactInfo.whatsappHref}
              external
              iconName="message-square"
              surfaceLevel={2}
            />

            <ContactChannelItem
              label={contactInfo.emailLabel}
              value={contactInfo.email}
              href={contactInfo.emailHref}
              iconName="mail"
              surfaceLevel={2}
            />

            <Surface level={2} radius="md" className="schedule-card">
              <div className="schedule-card__head">
                <span className="schedule-card__icon">
                  <TacticalIcon name="clock" size={18} />
                </span>
                <Heading as="h3" size="sub" tone="primary">
                  {sectionCopy.schedulesHeading}
                </Heading>
              </div>

              <div className="schedule-card__item">
                <span className="contact-channel__label">
                  {contactInfo.operationsSchedule.label}
                </span>
                <span className="schedule-card__hours">
                  {contactInfo.operationsSchedule.hours}
                </span>
              </div>

              <div className="schedule-card__item">
                <span className="contact-channel__label">
                  {contactInfo.adminSchedule.label}
                </span>
                <span className="schedule-card__hours">
                  {contactInfo.adminSchedule.hours}
                </span>
              </div>
            </Surface>
          </div>
        </div>
      </div>
    </Surface>
  );
}
