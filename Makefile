.PHONY: help serve install clean validate optimize

# Default target when running just 'make'
.DEFAULT_GOAL := help

# Colors for terminal output
BLUE = \033[0;34m
GREEN = \033[0;32m
NC = \033[0m # No Color

# Python version for simple HTTP server
PYTHON = python3

help: ## Show this help message
	@echo 'Usage:'
	@echo '  ${BLUE}make${NC} ${GREEN}<target>${NC}'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  ${BLUE}%-15s${NC} %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install development dependencies
	@echo "Installing development dependencies..."
	@npm install -g live-server html-validator-cli stylelint

serve: ## Start a local development server
	@echo "Starting development server..."
	@if command -v live-server >/dev/null 2>&1; then \
		live-server --port=3000 --no-browser; \
	else \
		$(PYTHON) -m http.server 3000; \
	fi

validate: ## Validate HTML and CSS files
	@echo "Validating HTML files..."
	@for file in *.html; do \
		echo "Checking $$file..."; \
		html-validate "$$file" || exit 1; \
	done
	@echo "Validating CSS files..."
	@if command -v stylelint >/dev/null 2>&1; then \
		stylelint "*.css"; \
	else \
		echo "stylelint not found. Run 'make install' first."; \
	fi

optimize: ## Optimize images and minify CSS/JS
	@echo "Optimizing website assets..."
	@if [ -d "resources" ]; then \
		find resources -type f -name "*.jpg" -exec jpegoptim --strip-all {} \; ; \
		find resources -type f -name "*.png" -exec optipng {} \; ; \
	fi
	@if command -v cleancss >/dev/null 2>&1; then \
		for file in *.css; do \
			cleancss -o "$$file.min" "$$file"; \
		done \
	else \
		echo "clean-css not found. Run 'make install' first."; \
	fi

clean: ## Clean up generated files
	@echo "Cleaning up..."
	@rm -f *.min.css *.min.js
	@find . -type f -name '.DS_Store' -delete
	@find . -type f -name 'Thumbs.db' -delete

deploy: ## Deploy to GitHub Pages (if repository is set up)
	@if [ -d ".git" ]; then \
		echo "Deploying to GitHub Pages..."; \
		git checkout -B gh-pages; \
		git add .; \
		git commit -m "Deploy to GitHub Pages"; \
		git push origin gh-pages -f; \
		git checkout -; \
	else \
		echo "Git repository not found. Initialize git first."; \
	fi
