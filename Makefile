.PHONY: help install dev build preview lint clean gh-pages

# Default target when running just 'make'
.DEFAULT_GOAL := help

# Colors for terminal output
BLUE = \033[0;34m
GREEN = \033[0;32m
RED = \033[0;31m
NC = \033[0m # No Color

help: ## Show this help message
	@echo 'Usage:'
	@echo '  ${BLUE}make${NC} ${GREEN}<target>${NC}'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  ${BLUE}%-15s${NC} %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install project dependencies
	@echo "Installing project dependencies..."
	@npm install

dev: ## Start development server
	@echo "Starting development server..."
	@npm run dev

build: ## Build for production
	@echo "Building for production..."
	@npm run build

preview: ## Preview production build
	@echo "Previewing production build..."
	@npm run preview

lint: ## Run linters
	@echo "Running linters..."
	@npm run lint

clean: ## Clean up generated files
	@echo "Cleaning up..."
	@rm -rf .nuxt dist .output node_modules
	@find . -type f -name '.DS_Store' -delete
	@find . -type f -name 'Thumbs.db' -delete

gh-pages: ## Deploy to GitHub Pages using GitHub Actions
	@if [ -d ".git" ]; then \
		echo "${BLUE}Triggering GitHub Actions deployment...${NC}"; \
		git add . && \
		git commit -m "Deploy modern Vue.js website with primary color #2962B3" && \
		git push private master && \
		echo "${GREEN}✓ Deployment triggered. Check status at:${NC}"; \
		echo "${BLUE}https://github.com/manuelwaltschek/modern-personal-portfolio/actions${NC}"; \
	else \
		echo "${RED}Error: Git repository not found. Initialize git first.${NC}"; \
	fi

optimize: ## Optimize images in public directory
	@echo "Optimizing images..."
	@if command -v jpegoptim >/dev/null 2>&1; then \
		find public -type f -name "*.jpg" -exec jpegoptim --strip-all {} \; ; \
	else \
		echo "jpegoptim not found. Install with 'brew install jpegoptim'"; \
	fi
	@if command -v optipng >/dev/null 2>&1; then \
		find public -type f -name "*.png" -exec optipng {} \; ; \
	else \
		echo "optipng not found. Install with 'brew install optipng'"; \
	fi
