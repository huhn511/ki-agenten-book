# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an mdBook project for writing a German book titled "Digitale Agenten: Wie KI unsere Wirklichkeit neu definiert" (Digital Agents: How AI Redefines Our Reality) by Sebastian Heußer. The book provides a comprehensive exploration of the AI revolution with focus on autonomous agents, covering historical development, technical foundations, societal impact, and future perspectives.

## Current Research Status

The project includes extensive research with recent findings from 2024-2025:
- **Historical KI Development**: From ImageNet breakthrough (2012) to current Transformer architectures, with GPT evolution from 117M to 1.8T parameters
- **Autonomous Agents**: OpenAI's "Operator", Microsoft's 70+ Agent Store systems, Google Gemini 2.0 native agentic capabilities
- **Technical Challenges**: AI energy consumption projected to reach 945 TWh by 2030, with efficiency solutions like FP8 quantization and neuromorphic chips
- **Work Transformation**: 25% of jobs globally affected by GenAI, with 92% of IT jobs being transformed rather than replaced
- **Regulation & Ethics**: EU AI Act implementation (2024), GDPR compliance challenges, international regulatory approaches
- **AGI Timeline**: Expert consensus ranges from 2025-2035, with OpenAI's o3 achieving 87.5% on ARC-AGI benchmark

## Book Structure & Concept

The book follows a unique narrative structure with Matrix/Ghost in the Shell quotes opening each chapter, reflecting the cyberpunk aesthetic and philosophical depth of AI's impact on reality. Each chapter includes:
- Thematic quotes with cultural context
- Core technical content (12-16 pages)
- Practical case studies and examples
- Future outlook and transitions

### Target Audience
- IT professionals and developers
- Business decision makers
- Tech-oriented readers without deep IT knowledge
- Technical students and academics

## Architecture

- `src/` - Contains the book's markdown source files
  - `SUMMARY.md` - Defines the book structure and navigation (includes cover page)
  - `cover.md` - Interactive Matrix-themed cover page with JavaScript animations
  - `chapter_1.md` and other chapter files - Individual book chapters
  - `images/` - Book assets (cover.png, white-rabbit.png for Easter eggs)
- `book.toml` - mdBook configuration with custom CSS and PDF output
- `theme/style.css` - Matrix/cyberpunk styling with green "digital rain" animations
- `book/` - Generated output directory (HTML and PDF)
- `docs/` - Comprehensive research documentation
  - `concept.md` - Updated book concept with 2024-2025 research integration
  - `research_claude.md` - Detailed research findings with expert quotes and statistics
  - `research_notebooklm.md` - Additional research insights and practical examples

## Common Commands

### Building the Book
```bash
mdbook build
```

### Development Server
```bash
mdbook serve
```
This starts a local server at http://localhost:3000 with live reload.

### Watch for Changes
```bash
mdbook watch
```

### Clean Build Directory
```bash
mdbook clean
```

### Test Code Samples
```bash
mdbook test
```

### Generate PDF Output
```bash
mdbook build
# PDF will be generated in book/pdf/output.pdf
```

## Development Notes

- Content is written in German language
- Uses standard mdBook styling for clean, readable presentation
- Book incorporates cutting-edge research from 2024-2025 including OpenAI o3, Microsoft Agent ecosystem, EU AI Act implementation
- Extensive research documentation available in `docs/` folder with expert quotes, statistics, and technical specifications
- Concept document updated with latest 2024-2025 research findings, optimized for 200 pages
- PDF output configured for professional publication
- Matrix/Ghost in the Shell quotes preserved as blockquotes for thematic consistency

## Key Research Insights for Content Development

**Latest Technical Breakthroughs:**
- OpenAI o3: 87.5% ARC-AGI performance (vs 85% human baseline)
- Energy efficiency: FP8 quantization providing 2x improvements, neuromorphic chips offering 1000x potential gains
- Multi-agent systems requiring 15x more tokens than single interactions

**Industry Developments:**
- 2025 positioned as "Year of Agents" by major tech companies
- Microsoft Agent Store with 70+ available agents
- Claude 3.5 achieving 49% success rate on coding tasks

**Societal Impact Data:**
- 25% of global jobs potentially affected by GenAI (ILO 2025)
- 57.1% of internet content already AI-generated
- EU AI Act fines up to €35M or 7% annual revenue

## File Organization

When adding new chapters:
1. Create the markdown file in `src/`
2. Update `src/SUMMARY.md` to include the new chapter in the navigation
3. Follow the established format: Matrix/Ghost in the Shell quote → content → expert quotes → case studies
4. Run `mdbook build` to generate the updated book

## Standard mdBook Design

The book uses mdBook's default styling for consistency and readability:
- **Standard mdBook theme**: Clean, professional appearance with built-in responsiveness
- **Default typography**: Optimized for reading with proper contrast and spacing
- **Responsive design**: Mobile-friendly layouts built into mdBook
- **PDF generation**: Standard mdBook PDF output with proper formatting
- **Accessibility**: Built-in keyboard navigation and screen reader support

## Current Chapter Structure (Updated June 2025)

Based on the latest concept.md updates:
- **Prolog**: Turing Test implications, AI-generated content proliferation
- **Kapitel 1**: AI evolution with specific milestones (ImageNet 2012, GPT progression)
- **Kapitel 2**: Technical foundations including multimodal systems and memory functions
- **Kapitel 3**: Agent revolution with concrete performance benchmarks
- **Kapitel 4**: Energy challenges with specific consumption data
- **Kapitel 5**: Internet transformation and autonomous systems
- **Kapitel 6**: Workplace impact with statistical analysis
- **Kapitel 7**: Ethics and regulation including EU AI Act details
- **Kapitel 8**: Future scenarios with AGI timelines
- **Epilog**: Post-scarcity society and human factors
