export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/styles.css') {
      return new Response(baseCss, { headers: { 'Content-Type': 'text/css' } });
    }

    if (path === '/bg.svg') {
      return new Response(bgSvg, { headers: { 'Content-Type': 'image/svg+xml' } });
    }

    return new Response(sidebarHtml, { headers: { 'Content-Type': 'text/html' } });
  }
}

const baseCss = `
:root{
  --bg:#f6f7f9; --paper:#ffffff; --ink:#222; --muted:#5b6573; --accent:#2c6fb7; --accent-2:#4e89c4; --line:#e6e9ee;
  --sidebar:#0f1b2d; --sidebar-ink:#e9f2ff; --chip-bg:#eef5ff;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  background: radial-gradient(1200px 600px at 15% -10%, #e9f2ff 0%, transparent 60%),
              radial-gradient(1000px 500px at 110% 10%, #ffeede 0%, transparent 60%),
              var(--bg) url('/bg.svg');
  color:var(--ink); line-height:1.5; padding:16px;}
.container{max-width:960px;margin:0 auto;}
.card{background:var(--paper); border-radius:16px; box-shadow:0 10px 30px rgba(15, 27, 45, .08);
  overflow:hidden; border:1px solid var(--line)}

/* Utilities */
.badge{display:inline-block; padding:.25rem .5rem; border-radius:999px; background:var(--chip-bg); color:#254165; font-weight:600; font-size:.8rem; margin:2px}
.sec h2{font-size:1.05rem; letter-spacing:.06em; text-transform:uppercase; color:var(--muted); margin:0 0 10px 0}
.role{font-weight:700}
.meta{color:var(--muted); font-size:.95rem}
.list{padding-left:20px; margin:8px 0}
.list li{margin:6px 0}
.skill-group{margin:10px 0 12px}
.skill-group-title{display:block; font-size:.72rem; letter-spacing:.08em; text-transform:uppercase; color:#9ab6d9; margin:0 0 6px}

/* Buttons */
.actions{display:flex; gap:10px; flex-wrap:wrap}
.btn{display:inline-flex; align-items:center; gap:8px; padding:10px 14px; border-radius:10px; border:1px solid var(--line);
 background:#fff; text-decoration:none; color:#18314f; font-weight:600; transition:transform 0.2s ease, box-shadow 0.2s ease}
.btn:hover{box-shadow:0 6px 20px rgba(0,0,0,.08); transform:scale(1.05)}
.btn.primary{background:var(--accent); color:#fff; border-color:transparent}

/* Sidebar Layout */
.grid{display:grid; grid-template-columns: 280px 1fr}
.sidebar{background:var(--sidebar); color:var(--sidebar-ink); padding:28px; animation:fadeIn 1s ease-in-out}
.sidebar a{color:#cfe1ff; transition:color 0.3s ease}
.sidebar a:hover{color:#fff}
.main{padding:24px}
.header h1{font-size:2rem; margin:0}
.header .title{color:#9ab6d9; margin-top:6px}
.contact{display:grid; gap:6px; font-size:.95rem; margin-top:14px}

/* Timeline Layout */
.timeline{position:relative; margin-left:8px}
.timeline::before{content:""; position:absolute; left:8px; top:0; bottom:0; width:2px; background:var(--line)}
.item{position:relative; padding-left:28px; margin:20px 0}
.item::before{content:""; position:absolute; left:0; top:.4rem; width:10px; height:10px; border-radius:50%; background:var(--accent); animation:popIn 0.5s ease}

/* Classic Layout */
.classic .header h1{font-size:2.2rem}
.classic .sheet{padding:24px}

/* Responsive */
@media(max-width: 768px){
  .grid{grid-template-columns:1fr}
  .sidebar{padding:20px}
  .main{padding:20px}
  .actions{flex-direction:column; align-items:flex-start}
  body{padding:8px}
}

@media print{
  body{background:#fff; padding:0}
  .container{max-width:100%; margin:0}
  .card, .sidebar{box-shadow:none}
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes popIn {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}`;

// Sidebar theme
const sidebarHtml = `<!DOCTYPE html><html lang="en"><head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Arvind Konar — Resume</title>
<link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div class="container">
    <article class="card grid">
      <aside class="sidebar">
        <div class="header">
          <h1>Arvind B. Konar</h1>
          <div class="title">Staff Site Reliability Engineer</div>
        </div>
        <div class="contact">
          <div>📞 +1 236-808-7338</div>
          <div>✉️ <a href="mailto:abkonar@gmail.com">abkonar@gmail.com</a></div>
          <div>💼 <a href="https://www.linkedin.com/in/arvind-konar-3526b623" target="_blank">LinkedIn</a></div>
          <div>▶️ <a href="http://youtube.com/arvindkonar" target="_blank">YouTube</a></div>
        </div>
        <hr />
        <div class="sec">
          <h2>Core Skills</h2>
          <div>
            <div class="skill-group">
              <span class="skill-group-title">Cloud</span>
              <span class="badge">GCP (GKE, Cloud Run, Vertex AI, Dataflow, Cloud Armor, IAM, VPN, Compute)</span>
              <span class="badge">AWS (VPC, EKS, Lambda, S3, IAM, CloudFront, Shield, Transit Gateway, EC2, RDS)</span>
              <span class="badge">Azure (VNet, VPN, App Insights)</span>
              <span class="badge">Kubernetes (GKE, EKS, Rancher)</span>
            </div>
            <div class="skill-group">
              <span class="skill-group-title">Network</span>
              <span class="badge">Cloudflare Zero Trust, WAF, DNS</span>
              <span class="badge">Palo Alto, F5 BIG-IP, NetScaler</span>
              <span class="badge">BGP, VXLAN/EVPN, OSPF/ISIS, Juniper, Cisco, Arista</span>
            </div>
            <div class="skill-group">
              <span class="skill-group-title">DevOps</span>
              <span class="badge">Infrastructure as Code (Terraform/Terragrunt)</span>
              <span class="badge">CI/CD (GitHub Actions, Atlantis, ArgoCD)</span>
            </div>
            <div class="skill-group">
              <span class="skill-group-title">Automation</span>
              <span class="badge">Incident Automation (PagerDuty, Grafana IRM, Jira, Slack, Teams)</span>
              <span class="badge">Network Automation (Python, Ansible, Bash)</span>
            </div>
            <div class="skill-group">
              <span class="skill-group-title">Observability</span>
              <span class="badge">Display & Alerting (Grafana, Alertmanager)</span>
              <span class="badge">Metrics (Prometheus, Mimir, Thanos)</span>
              <span class="badge">Logs (Loki)</span>
              <span class="badge">Traces (Tempo, Opentelemetry)</span>
            </div>
          </div>
        </div>
        <hr />
        <div class="sec">
          <div class="actions">
            <a class="btn primary" href="/Arvind_Konar_April_2026.docx.pdf" download>Download PDF</a>
          </div>
        </div>
      </aside>

      <main class="main">
        <section class="sec">
          <h2>Summary</h2>
          <p>Site Reliability Engineer/DevOps Engineer with 10+ years of experience spanning SRE, cloud infrastructure, Kubernetes, IaC, networking, and security. Proven track record building automated multi-cloud platforms (GCP/AWS/Azure), GitOps delivery, and observability systems that reduce operational toil and improve reliability for production services.</p>
        </section>

        <section class="sec">
          <h2>Experience</h2>
          <div class="timeline">
            <div class="item">
              <div class="role">Plenty of Fish ULC (Match Group)</div>
              <div class="meta">Staff Site Reliability Engineer · Mar 2019 – Present</div>
              <ul class="list">
                <li>Built automated multi-cloud infrastructure CICD pipelines using Terraform, Terragrunt, Atlantis, and GitHub Actions, enabling consistent, auditable deployments across AWS, GCP, and Azure.</li>
                <li>Designed, implemented, and managed AWS, GCP, and Azure Cloud VPC Networks including NAT Gateway, Loadbalancers, Transit Gateway, Cloud VPN, Cloud Router, Direct/Inter Connect.</li>
                <li>Standardized Kubernetes deployments using GKE with ArgoCD and Atlantis, reducing configuration drift and enabling GitOps-based CI/CD across production and staging environments.</li>
                <li>Architected and deployed Grafana Stack with Prometheus, Loki, Mimir/Thanos, and otel integrated with Grafana and Alertmanager, delivering unified observability for Development and Infra teams.</li>
                <li>Worked with AI and ML teams to build out GCP Infrastructure and pipelines for ML workloads using GCP Dataflow, Vertex AI, Cloud Run, Notebooks, Artifact Registry, Cloud Armor, GKE, Gateway API, containerized workloads.</li>
                <li>Migrated VMs from VMware to Proxmox to support open source virtualization and cost savings for the company.</li>
                <li>Implemented Cloudflare Zerotrust VPN and Cloudflare DNS zones along with WAF/ddos protection to protect digital assets.</li>
                <li>Implemented a hub-and-spoke network topology in GCP to unify inter-region connectivity, reducing latency and simplifying resource management across environments.</li>
                <li>Developed a containerized Slack bot in Python to integrate with PagerDuty, Jira, and internal APIs, automating repetitive workflows and improving incident response times.</li>
                <li>Built and maintained VXLAN/EVPN networks using Juniper QFX spine-leaf architecture to support growing data center traffic demands.</li>
                <li>Managed and upgraded Palo Alto firewall and Netscalars.</li>
                <li>Deployed and managed F5 (physical and virtual) load balancers for highly available services across dev and production tiers.</li>
                <li>Improved productivity by 50% by implementing Ansible playbooks and Python scripts for automating network tasks.</li>
                <li>Deployed and managed virtual (Windows and Linux) workloads in virtualization environment (Virtio, VMware and Proxmox).</li>
              </ul>
            </div>
            <div class="item">
              <div class="role">Verisign</div>
              <div class="meta">Network Security Engineer (DDOS) · Sept 2016 – Mar 2019</div>
              <ul class="list">
                <li>Designed and implemented Arbor-based DDOS mitigation infrastructure on VMware, improving protection for customer-facing services and reducing incident response times.</li>
                <li>Built automation for network configuration and change deployments using Ansible, Python, Jinja2, and shell scripts, significantly reducing manual errors and deployment time.</li>
                <li>Created a real-time monitoring stack using AWS for internal infrastructure, enabling faster detection and resolution of outages.</li>
                <li>Led change review meetings as part of the Change Advisory Board, improving governance and reducing unplanned service disruptions.</li>
                <li>Delivered process documentation and trained Tier1 and Tier2 engineers, reducing escalations and improving resolution efficiency.</li>
                <li>Conducted multi-vendor device upgrades and bug validation using pre-production test environments to ensure high stability before deployment.</li>
                <li>Analyzed DDOS traffic patterns and created mitigation strategies tailored to evolving attack types, increasing resiliency for internal and external services.</li>
              </ul>
            </div>
            <div class="item">
              <div class="role">Iometrix</div>
              <div class="meta">Network Automation/Test Engineer · Aug 2014 – Sept 2016</div>
              <ul class="list">
                <li>Automated MEF CE 2.0 test report generation using Python, streamlining certification workflows and reducing documentation turnaround times.</li>
                <li>Designed and executed test cases for E-Line, E-LAN, E-Tree, and E-Access services using the Xena ATTEST suite, ensuring vendor compliance with MEF standards.</li>
                <li>Configured and maintained test environments, including test probes and firmware upgrades, to ensure test integrity for real-time service evaluations.</li>
                <li>Used Wireshark and other traffic analysis tools to troubleshoot test issues, accelerating root cause identification and resolution.</li>
                <li>Maintained and updated detailed Test Execution Guides (TEGs), improving team collaboration and process consistency.</li>
              </ul>
            </div>
            <div class="item">
              <div class="role">ZTE Telecom Pvt. Ltd.</div>
              <div class="meta">Telecom Engineer · Sept 2010 – Jun 2012</div>
              <ul class="list">
                <li>Engineered MPLS Layer 2 and Layer 3 VPNs using ZTE and Cisco routers, enabling secure enterprise connectivity across North Indian cities.</li>
                <li>Deployed Packet Transport Network (PTN) systems and supported large enterprise clients, earning multiple commendations for service excellence.</li>
                <li>Led microwave installation and commissioning projects across three cities, expanding ZTE’s infrastructure footprint in the region.</li>
                <li>Contributed to the planning and rollout of a DWDM backbone network, coordinating closely with vendors and internal stakeholders.</li>
                <li>Delivered SDH training to vendors, increasing deployment success rates and reducing post-installation support tickets.</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="sec">
          <h2>Education</h2>
          <div class="timeline">
            <div class="item">
              <div class="role">Masters in Computer Networks/Telecommunications</div>
              <div class="meta">George Mason University · May 2014</div>
            </div>
            <div class="item">
              <div class="role">Bachelors in Electronics and Telecommunication Engineering</div>
              <div class="meta">Mumbai University · May 2010</div>
            </div>
          </div>
        </section>

        <section class="sec">
          <h2>Certifications</h2>
          <div class="timeline">
            <div class="item"><span class="badge">AWS Solutions Architect Associate</span></div>
            <div class="item"><span class="badge">Google Cloud Professional Cloud Network Engineer</span></div>
            <div class="item"><span class="badge">F5 BIG IP 101</span></div>
            <div class="item"><span class="badge">Cisco Certified Network Associate R&S</span></div>
            <div class="item"><span class="badge">Cisco Certified Network Professional R&S</span></div>
            <div class="item"><span class="badge">JNCIP-DC – Juniper</span></div>
          </div>
        </section>
      </main>
    </article>
  </div>
</body></html>`;

const bgSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'>
  <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0.15'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0 .05 .08 .12 .08 .04 0'/></feComponentTransfer></filter>
  <rect width='120' height='120' filter='url(#n)' opacity='0.25'/>
</svg>`;