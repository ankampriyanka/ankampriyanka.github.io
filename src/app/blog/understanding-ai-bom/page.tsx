import Container from "@/components/layout/Container";

export default function UnderstandingAIBOMPage() {
  return (
    <main className="min-h-screen bg-white py-24 text-slate-900 dark:bg-slate-950 dark:text-white">
      <Container>
        <article className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-300">
            AI Governance · AIBOM · Part 1
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Understanding AI Bill of Materials (AIBOM)
          </h1>

          <p className="mt-6 text-xl leading-8 text-slate-600 dark:text-slate-300">
            From software inventory to AI supply-chain visibility.
          </p>

          <div className="mt-10 space-y-10 text-lg leading-8 text-slate-700 dark:text-slate-300">
            <section>
              <p>
                As organizations move from experimenting with AI to deploying
                production-grade AI systems, one question becomes increasingly
                important:
              </p>
              <blockquote className="my-6 border-l-4 border-cyan-400 pl-6 text-xl font-medium text-slate-900 dark:text-white">
                Do we actually know what our AI systems depend on?
              </blockquote>
              <p>
                A production-grade AI system depends not only on the code it
                runs on, but also on many other non-code artifacts and
                infrastructure — from initial raw training samples and
                fine-tuning datasets to provider-managed APIs.
              </p>
              <p className="mt-5">
                Together, these form the <strong>AI supply chain</strong>,
                which is broader than the traditional software supply chain.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                AI Dependencies Accumulate Across the Lifecycle
              </h2>
              <p className="mt-4">
                These dependencies are not concentrated at a single step.
                They accumulate throughout the AI lifecycle, and much of this
                sits outside deployers’ direct visibility.
              </p>
              <p className="mt-5">
                Critical dependency changes can also occur at different stages
                of the lifecycle — for example, retrieval corpus changes,
                provider-side updates, safety controls and other runtime
                dependencies.
              </p>
              <p className="mt-5">
                The application code may remain unchanged while the behaviour
                or risk profile of the AI system changes. That creates a
                governance question:
              </p>
              <blockquote className="my-6 border-l-4 border-cyan-400 pl-6 text-xl font-medium text-slate-900 dark:text-white">
                If the system changes without a corresponding code change,
                where is that change recorded?
              </blockquote>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                SBOM Is Necessary — But AI Needs More
              </h2>
              <p className="mt-4">
                An SBOM records software components and their declared
                versions. Alongside those software component records, an AI
                lifecycle needs to record information such as pretrained
                models, the data they are trained on, evaluation results that
                justify deployment, and provider-managed services in the
                request path.
              </p>
              <p className="mt-5">
                An AIBOM should therefore provide visibility into these
                non-code artifacts and the dependencies that influence the AI
                system.
              </p>
              <p className="mt-5">
                In that sense, an AIBOM should not be treated simply as an
                “SBOM for AI”. It addresses a broader AI supply chain.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Why Is AIBOM a Governance Artifact?
              </h2>
              <p className="mt-4">
                An AIBOM is not merely an engineering convenience when it
                becomes a record authored by an accountable party, in a form
                another party can read later and act on.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {[
                  ["01", "Accountable authorship"],
                  ["02", "Declared scope and an explicit completeness claim"],
                  ["03", "Claims tied to evidence"],
                  ["04", "A controlled lifecycle"],
                ].map(([number, title]) => (
                  <div
                    key={number}
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                  >
                    <p className="text-sm font-semibold text-cyan-300">{number}</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">
                      {title}
                    </h3>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                What Does an AI BOM Consist Of?
              </h2>
              <p className="mt-4">
                An AI BOM is a comprehensive record of AI artifacts and
                lifecycle components throughout an AI system’s design,
                development and deployment. It can serve as primary evidence
                for AI audits.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  {
                    title: "Models",
                    text: "Base model digests, declared and concluded licenses, distribution channels, signatures, fine-tuned models, LoRA/PEFT adapters and checkpoints.",
                  },
                  {
                    title: "Datasets",
                    text: "Dataset ID/version, hash, licenses, source URLs, snapshots, collection methods and sensitive-data or anonymization information.",
                  },
                  {
                    title: "Agents & Tools",
                    text: "Orchestrators, APIs, extensions and MCP servers.",
                  },
                  {
                    title: "Prompts & Guardrails",
                    text: "Templates, policy packs and security notes.",
                  },
                  {
                    title: "Runtime",
                    text: "Containers, dependencies and timestamps.",
                  },
                  {
                    title: "Build Provenance",
                    text: "Digests of built images, input source locations, build arguments and build duration.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-slate-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-slate-800 pt-10">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                The Shift: From Inventory to Evidence
              </h2>
              <p className="mt-4">
                The value of an AIBOM is not simply the number of fields it
                contains. Its value comes from making the AI system’s
                dependencies visible and giving an organization a record that
                can support later decisions, reviews and assurance activities.
              </p>
              <blockquote className="my-6 border-l-4 border-cyan-400 pl-6 text-xl font-medium text-slate-900 dark:text-white">
                An AI system is no longer just code + model.
              </blockquote>
              <p>
                It can involve data, models, code, agents, tools, prompts,
                guardrails, runtime infrastructure, external services and
                evidence. AIBOM is a way of bringing those dependencies into
                view.
              </p>
            </section>

            <section className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                Part 2
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
                From AIBOM to a Living Governance Artifact
              </h2>
              <p className="mt-4">
                Part 2 will explore ownership, update triggers, evidence,
                lifecycle changes, auditability and how AIBOM can connect with
                broader AI governance and assurance practices.
              </p>
            </section>

            <p className="border-t border-slate-800 pt-8 text-sm leading-6 text-slate-500 dark:text-slate-400">
              This article is based on the concepts and terminology in the
              OWASP AI Bill of Materials (AIBOM) project materials.
            </p>
          </div>
        </article>
      </Container>
    </main>
  );
}
